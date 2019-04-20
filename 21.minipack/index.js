const fs = require('fs');
const path = require('path');
const babel = require('babel-core');
const traverse = require('babel-traverse').default;

let ID = 0;

function fileToAST (sourceFile) {
    const result = babel.transformFileSync(path.resolve(__dirname, sourceFile), {
        babelrc: false
    });
    return result.ast;
}

function ASTToCode (ast) {
    const result = babel.transformFromAst(ast, null, {
        babelrc: false,
        presets: ['env']
    });
    return result.code;
}

function getModuleDeps (ast) {
    let dependencies = [];
    traverse(ast, {
        ImportDeclaration: ({node}) => {
            dependencies.push(node.source.value);
        }
    });

    return dependencies;
}

function createAsset (sourceFile) {
    const ast = fileToAST(sourceFile);
    const moduleDeps = getModuleDeps(ast);
    const code = ASTToCode(ast);

    const id = ID++;

    return {
        id,
        filename: sourceFile,
        dependencies: moduleDeps,
        code
    };
}

function traverseEntry(entry) {
    const entryAsset = createAsset(entry);
    const queue = [entryAsset];

    for (const asset of queue) {
        asset.mapping = {};

        const dirname = path.dirname(asset.filename);
        asset.dependencies.forEach((moduleName) => {
            const modulePath = path.resolve(dirname, moduleName);
            const childAsset = createAsset(modulePath);
            asset.mapping[moduleName] = childAsset.id;

            queue.push(childAsset);
        })
    }
    fs.writeFileSync('temp.mapping.json', JSON.stringify(queue), 'utf-8')
    return queue;
}

function processPack (entry) {
    let modules = '';
    
    const moduleMapping = traverseEntry(entry);
    moduleMapping.forEach((module) => {
        modules += `${module.id}: [
            function (require, module, exports) {
                ${module.code}
            },
            ${JSON.stringify(module.mapping)}
        ],`
    });

    const bundleCode = `
        (function (modules) {
            function require (id) {
                const [fn, mapping] = modules[id];

                function localRequire(name) {
                    return require(mapping[name]);
                }

                const module = {
                    exports: {}
                };

                fn(localRequire, module, module.exports);

                return module.exports;
            }

            require(0);
        })({${modules}})
    `;

    return bundleCode;
}



fs.writeFileSync('bundle.js', processPack('./test/index.js'), 'utf-8');
