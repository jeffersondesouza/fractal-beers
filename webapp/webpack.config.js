const devConfig = require('./webpack.config.dev.js');
const prodConfig = require('./webpack.config.prod.js');

let config;

switch (process.env.npm_lifecycle_event) {
  case 'start':
    config = devConfig;
    break;
  default:
    config = prodConfig;
    break;
}

module.exports = config;
