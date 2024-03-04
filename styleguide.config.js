const path = require('path');
const webpackConfig = require('./webpack.config.js')

module.exports = {
  title: 'Style guide example',
  components: path.resolve(__dirname,'src/components/**/*.tsx'),
  ignore: path.resolve(__dirname, ['**/__tests__/**', '**/*.test.{js,jsx,ts,tsx}', '**/*.spec.{js,jsx,ts,tsx}', '**/*.d.ts', '**.*.example.{js,jsx,ts,tsx}']),
  webpackConfig,


}
