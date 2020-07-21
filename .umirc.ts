/*
 * @Descripttion: TOSS小熊
 * @version: 1.0.0
 * @Author: Shentong
 * @Date: 2020-07-10 19:11:08
 * @LastEditors: Shentong
 * @LastEditTime: 2020-07-21 12:00:24
 */

import { defineConfig } from 'umi';
import routes from './src/routes';
const px2rem = require('postcss-pxtorem');
console.log('.umirc.process.env:', process.env.BUILD_ENV);

const _interopRequireDefault: Function = (obj: any) => {
  return obj && obj.__esModule ? obj : { default: obj };
};

const pxtorem2 = _interopRequireDefault(px2rem).default;

/** https://github.com/cuth/postcss-pxtorem */
const px2remOpts = {
  propList: ['*'],
  rootValue: 37.5,
  minPixelValue: 2, // 小于或等于`2px`不转换为视窗单位，你也可以设置为你想要的值
  unitPrecision: 3, // 指定`px`转换为视窗单位值的小数位数（很多时候无法整除）
  exclude: /node_modules/i,
  selectorBlackList: ['t_npx'], // 以包含t_npx的class不需要转换
  replace: true,
};

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes,
  extraPostCSSPlugins: [pxtorem2(px2remOpts)],
  proxy: {
    '/api': {
      target: 'https://test.meixiu.mobi/',
      changeOrigin: true,
      // pathRewrite: {
      //   '^/api': '/api',
      // },
    },
  },
});
