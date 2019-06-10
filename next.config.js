require('dotenv').config();
const path = require('path');
const nextEnv = require('next-env');
const withTypescript = require('@zeit/next-typescript');
const withCSS = require('@zeit/next-css');
const Dotenv = require('dotenv-webpack');
const FilterWarningsPlugin = require('webpack-filter-warnings-plugin');
const withNextEnv = nextEnv();
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
  .BundleAnalyzerPlugin;
const compose = require('lodash/fp/compose');

const withOffline = moduleExists('next-offline')
  ? require('next-offline')
  : config => config;

if (typeof require !== 'undefined') {
  require.extensions['.css'] = file => {};
}

const HTTP_CALLS_CACHE_CONFIG = {
  urlPattern: /^https?.*/,
  handler: 'NetworkFirst',
  options: {
    cacheName: 'https-calls',
    networkTimeoutSeconds: 15,
    expiration: {
      maxEntries: 150,
      maxAgeSeconds: 30 * 24 * 60 * 60 // 1 month
    },
    cacheableResponse: {
      statuses: [0, 200]
    }
  }
};

const IMAGE_CACHE_CONFIG = {
  urlPattern: /\.(?:png|jpg|jpeg|svg)$/,
  handler: 'CacheFirst',
  options: {
    cacheName: 'images',
    expiration: {
      maxEntries: 10
    }
  }
};

const BASE_CONFIG = {
  target: 'serverless',
  generateInDevMode: false,
  workboxOpts: {
    exclude: [/\.(?:png|jpg|jpeg|svg)$/],
    skipWaiting: true,
    swDest: 'static/service-worker.js',
    runtimeCaching: [HTTP_CALLS_CACHE_CONFIG, IMAGE_CACHE_CONFIG]
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

    config.plugins.push(
      new FilterWarningsPlugin({
        exclude: /mini-css-extract-plugin[^]*Conflicting order between:/
      })
    );

    config.resolve.alias = {
      ...config.resolve.alias,
      '@components': path.resolve(__dirname, 'src/components'),
      '@generated': path.resolve(__dirname, 'generated'),
      '@shared': path.resolve(__dirname, 'src/shared'),
      '@pages': path.resolve(__dirname, 'pages'),
      '@hooks': path.resolve(__dirname, 'src/hooks'),
      '@apolloSetup': path.resolve(__dirname, 'apolloSetup'),
      '@axios': path.resolve(__dirname, 'axios'),
      '@customIcons': path.resolve(__dirname, 'custom-icons'),
      '@graphql': path.resolve(__dirname, 'graphql'),
      '@services': path.resolve(__dirname, 'src/services'),
      '@guards': path.resolve(__dirname, 'src/guards')
    };
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
