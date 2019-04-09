import(/* webpackChunkName: 'add'*/ "./add").then(function(module) {
    const add = module.default;
    console.log(add(6, 8));
});
