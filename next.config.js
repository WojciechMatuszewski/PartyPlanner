require('dotenv').config();
const withTypescript = require('@zeit/next-typescript');
const withCSS = require('@zeit/next-css');
const composePlugins = require('next-compose-plugins');
const Dotenv = require('dotenv-webpack');
const path = require('path');

if (typeof require !== 'undefined') {
  require.extensions['.css'] = file => {};
}

module.exports = composePlugins([withTypescript, withCSS], {
  webpack: config => {
    config.plugins = config.plugins || [];

    config.plugins = [
      ...config.plugins,
      new Dotenv({
        path: path.join(__dirname, '.env'),
        systemvars: true
      })
    ];

    config.resolve.alias = {
      ...config.resolve.alias,
      '@components': path.resolve(__dirname, 'src/components'),
      '@generated': path.resolve(__dirname, 'generated'),
      '@shared': path.resolve(__dirname, 'src/shared'),
      '@pages': path.resolve(__dirname, 'pages'),
      '@hooks': path.resolve(__dirname, 'src/hooks'),
      '@apolloSetup': path.resolve(__dirname, 'apolloSetup'),
      '@axios': path.resolve(__dirname, 'axios')
    };
    return config;
  }
});
