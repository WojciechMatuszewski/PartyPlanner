require('dotenv').config();
const path = require('path');
const nextEnv = require('next-env');
const withTypescript = require('@zeit/next-typescript');
const withCSS = require('@zeit/next-css');
const Dotenv = require('dotenv-webpack');
const FilterWarningsPlugin = require('webpack-filter-warnings-plugin');
const withNextEnv = nextEnv();
const webpackImport = require('webpack');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
  .BundleAnalyzerPlugin;
const compose = require('lodash/fp/compose');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

const withOffline = moduleExists('next-offline')
  ? require('next-offline')
  : config => config;

if (typeof require !== 'undefined') {
  require.extensions['.css'] = file => {};
}

const BASE_CONFIG = {
  target: 'serverless',
  generateInDevMode: false,
  generateSw: false,
  dontAutoRegisterSw: true,
  devSwSrc: './static/service-worker.js',
  workboxOpts: {
    swSrc: 'static/service-worker.js',
    swDest: 'static/service-worker.js'
  },

  webpack: config => {
    config.plugins = config.plugins || [];

    config.module.rules.push({
      loader: 'webpack-ant-icon-loader',
      enforce: 'pre',
      include: [path.resolve('node_modules/@ant-design/icons/lib/dist')]
    });

    config.module.rules.push({
      test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
      use: [
        {
          loader: 'babel-loader'
        },
        {
          loader: '@svgr/webpack',
          options: {
            babel: false,
            icon: true
          }
        }
      ]
    });

    // paths from tsconfig
    if (config.resolve.plugins) {
      config.resolve.plugins.push(new TsconfigPathsPlugin());
    } else {
      config.resolve.plugins = [new TsconfigPathsPlugin()];
    }

    config.plugins.push(
      new FilterWarningsPlugin({
        exclude: /mini-css-extract-plugin[^]*Conflicting order between:/
      })
    );
    config.plugins.push(new webpackImport.IgnorePlugin(/\/iconv-loader$/));
    config.plugins.push(new Dotenv());

    return config;
  }
};

module.exports = compose(
  withNextEnv,
  withTypescript,
  withCSS,
  withOffline
)(BASE_CONFIG);

function moduleExists(name) {
  try {
    return require.resolve(name);
  } catch (error) {
    return false;
  }
}
