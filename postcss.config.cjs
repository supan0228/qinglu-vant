const autoprefixer = require('autoprefixer')
const postCssPxToRem = require('postcss-pxtorem')

module.exports = {
  plugins: [
    require('tailwindcss'),
    autoprefixer({
      overrideBrowserslist: [
        'Android 4.1',
        'iOS 7.1',
        'Chrome > 31',
        'ff > 31',
        'ie >= 8',
        'last 10 versions', // 所有主流浏览器最近10版本用
      ],
      grid: true,
    }),
    postCssPxToRem({
      rootValue: 37.5, //这里配置37.5是为了和iphone6的css像素1:1还原,750px的设计稿就要除以2 来写px单位
      propList: ['*'],
      unitPrecision: 5,
      selectorBlackList: ['.norem'], // 过滤掉.norem-开头的class，不进行rem转换
    }),
  ],
}
