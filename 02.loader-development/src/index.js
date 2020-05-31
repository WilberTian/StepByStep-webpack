const loaderUtils = require('loader-utils')

module.exports = function rem2px(source) {
  if (!source) {
    return ''
  }

  const options = loaderUtils.getOptions(this) || {}
  let baseSize = 16
  if ('baseSize' in options) {
    baseSize = options.baseSize
  }

  const result = source.replace(/(\d*\.?\d+)rem/g, (match, m1) => {
    return `${m1 * baseSize}px`
  })

  return result
}
