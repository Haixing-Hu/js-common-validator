/*******************************************************************************
 *
 *    Copyright (c) 2017 - 2021
 *    Nanjing Smart Medical Investment Operation Service Co. Ltd.
 *    All rights reserved.
 *
 ******************************************************************************/
const resolve = require('path').resolve;
const TerserPlugin = require('terser-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const { merge } = require('webpack-merge');

/**
 * 所有环境下的公共配置。
 */
const commonConfig = {
  entry: resolve(__dirname, 'src/index.js'),
  output: {
    filename: 'common-validator.min.js',
    library: {
      name: 'common-validator',
      type: 'umd',
    },
    globalObject: 'this',
  },
  devtool: 'source-map',
  mode: 'production',
  stats: 'summary',
  target: ['web', 'es5'],
  externals: {
    '@haixing_hu/common-util': 'commonjs2 @haixing_hu/common-util',
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          compress: {
            drop_debugger: true,
          },
        },
      }),
    ],
  },
  module: {
    rules: [{
      test: /\.js$/,
      include: [
        resolve(__dirname, 'src'),
        resolve(__dirname, 'node_modules/node-uri'),
      ],
      loader: 'babel-loader',
      options: {
        cacheDirectory: true,
        babelrc: false,         // replace .babelrc with babel.config.json
        rootMode: 'upward',
      },
    }],
  },
};

/**
 * 模块分析配置。
 */
const analyzerConfig = {
  plugins: [
    new BundleAnalyzerPlugin(),
  ],
};

module.exports = (process.env.USE_ANALYZER ? merge(commonConfig, analyzerConfig) : commonConfig);
