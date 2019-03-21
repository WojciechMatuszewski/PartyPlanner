require('dotenv').config();
const withTypescript = require('@zeit/next-typescript');
const withCSS = require('@zeit/next-css');
const composePlugins = require('next-compose-plugins');
const Dotenv = require('dotenv-webpack');
const path = require('path');
const FilterWarningsPlugin = require('webpack-filter-warnings-plugin');

const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
  .BundleAnalyzerPlugin;

if (typeof require !== 'undefined') {
  require.extensions['.css'] = file => {};
}

module.exports = composePlugins([withTypescript, withCSS], {
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

    config.plugins = [
      ...config.plugins,
      new Dotenv({
        path: path.join(__dirname, '.env'),
        systemvars: true
      }),
      new FilterWarningsPlugin({
        exclude: /mini-css-extract-plugin[^]*Conflicting order between:/
      })
      // new BundleAnalyzerPlugin({
      //   analyzerMode: 'static'
      // })
    ];

    config.resolve.alias = {
      ...config.resolve.alias,
      '@components': path.resolve(__dirname, 'src/components'),
      '@generated': path.resolve(__dirname, 'generated'),
      '@shared': path.resolve(__dirname, 'src/shared'),
      '@pages': path.resolve(__dirname, 'pages'),
      '@hooks': path.resolve(__dirname, 'src/hooks'),
      '@apolloSetup': path.resolve(__dirname, 'apolloSetup'),
      '@axios': path.resolve(__dirname, 'axios'),
      '@customIcons': path.resolve(__dirname, 'custom-icons')
    };
    return config;
  }
});
