const path = require('path');
const webpackConfig = require('./webpack.config.js')

module.exports = {
  title: 'Style guide example',
  components: path.resolve(__dirname,'src/components/**/*.tsx'),
  webpackConfig,
  

}
