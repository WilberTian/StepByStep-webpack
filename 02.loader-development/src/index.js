const loaderUtils = require('loader-utils');

module.exports = function rem2px(src) {
    if (!src) {
        return '';
    }

    const options = loaderUtils.getOptions(this) || {};
    let baseSize = 16;
    if ('baseSize' in options) {
        baseSize = options.baseSize;
    }

    const result = src.replace(/(\d*\.?\d+)rem/g, (match, m1) => {
        return `${(m1 * baseSize)}px`;
    });

    return result;
};
