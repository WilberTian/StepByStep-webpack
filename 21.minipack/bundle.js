
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
        })({0: [
            function (require, module, exports) {
                "use strict";

var _add = require("./add.js");

var _add2 = _interopRequireDefault(_add);

var _sum = require("./sum.js");

var _sum2 = _interopRequireDefault(_sum);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var addRe = (0, _add2.default)(6, 8);
console.log(addRe);

var sumRe = (0, _sum2.default)([1, 2, 3, 4, 5, 6]);
console.log(sumRe);
            },
            {"./add.js":1,"./sum.js":2}
        ],1: [
            function (require, module, exports) {
                "use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var add = function add(a, b) {
  return a + b;
};

exports.default = add;
            },
            {}
        ],2: [
            function (require, module, exports) {
                "use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = sum;

var _add = require("./add.js");

var _add2 = _interopRequireDefault(_add);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function sum(nums) {
  var result = 0;
  nums.forEach(function (num) {
    result = (0, _add2.default)(result, num);
  });
  return result;
};
            },
            {"./add.js":3}
        ],3: [
            function (require, module, exports) {
                "use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var add = function add(a, b) {
  return a + b;
};

exports.default = add;
            },
            {}
        ],})
    