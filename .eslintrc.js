/*
 * @Author: xxb
 * @Date: 2023-12-04 15:09:59
 * @LastEditTime: 2023-12-26 13:28:47
 * @Description:
 * @FilePath: \pc-pureEdition\.eslintrc.js
 */
// ESlint 检查配置
module.exports = {
  root: true,
  parser: "vue-eslint-parser",
  parserOptions: {
    parser: "babel-eslint",
    sourceType: "module",
    ecmaVersion: 2020,
  },
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  extends: [],

  // add your custom rules here
  // it is base on https://github.com/vuejs/eslint-config-vue
  rules: {
    quotes: "off",
    semi: "off",
    commaDangle: "off",
    "vue/no-parsing-error": ["off"]
  },
};
