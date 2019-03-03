const withTypescript = require('@zeit/next-typescript');
const withCSS = require('@zeit/next-css');
const composePlugins = require('next-compose-plugins');

if (typeof require !== 'undefined') {
  require.extensions['.css'] = file => {};
}

module.exports = composePlugins([withTypescript, withCSS]);
