/* eslint-disable */
const path = require('path');
const fs = require('fs');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const autoprefixer = require('autoprefixer');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const buildPath = path.resolve(__dirname, 'public');
const srcPath = path.resolve(__dirname, 'src');

const getCSSLoader = (isProd, withModules = false) => [
  isProd
    ? {
      loader: MiniCssExtractPlugin.loader,
    }
    : {
      loader: 'style-loader',
    },
  {
    loader: 'css-loader',
    options: {
      modules: withModules && {
        localIdentName: '[name]__[local]__[hash:base64:5]',
      },
      importLoaders: 1,
      sourceMap: false,
    },
  },
  {
    loader: 'postcss-loader',
    options: {
      plugins: () => [autoprefixer()],
    },
  },
  {
    loader: 'sass-loader',
    options: {
      sassOptions: {
        includePaths: [srcPath, path.join(srcPath, 'styles')],
      },
    },
  },
];

module.exports = (opts, args) => {
  const isProd = args.mode === 'production';

  return {
    devtool: isProd ? 'source-map' : 'eval-source-map',

    entry: './src/index.tsx',
    output: {
      path: buildPath,
      filename: 'static/js/[name]-[hash].js',
      publicPath: '/',
    },

    resolve: {
      extensions: ['.ts', '.tsx', '.js', '.jsx'],
      alias: {
        'react-dom': '@hot-loader/react-dom',
        components: path.join(srcPath, 'components'),
        shared: path.join(srcPath, 'shared'),
        styles: path.join(srcPath, 'styles'),
        pages: path.join(srcPath, 'pages'),
        utils: path.join(srcPath, 'utils'),
        config: path.join(srcPath, 'config'),
        types: path.join(srcPath, 'types'),
        store: path.join(srcPath, 'store'),
        containers: path.join(srcPath, 'containers'),
      },
    },

    module: {
      rules: [
        {
          enforce: 'pre',
          test: /\.js$/,
          loader: 'source-map-loader',
        },
        {
          test: /\.(ts|js)x?$/,
          exclude: /node_modules/,
          use: [
            {
              loader: 'babel-loader',
            },
          ],
        },
        {
          test: /\.s?css$/,
          exclude: /\.modules\.(s?css|sass)$/,
          use: getCSSLoader(isProd, false),
        },
        {
          test: /\.modules\.(s?css|sass)$/,
          use: getCSSLoader(isProd, true),
        },
        {
          test: /\.(png|svg|jpg|gif)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                publicPath: '/static/',
                outputPath: 'static/',
                name: 'img/[name].[ext]',
              },
            },
          ],
        },
        {
          test: /\.(eot|woff2|woff|ttf?)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                publicPath: '/static/',
                outputPath: 'static/',
                name: 'fonts/[name].[ext]',
              },
            },
          ],
        },
        {
          test: /\.(pdf?)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                publicPath: '/static/',
                outputPath: 'static/',
                name: 'docs/[name].[ext]',
              },
            },
          ],
        },
      ],
    },

    plugins: [
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        template: path.join(srcPath, 'index.html'),
      }),
      new ForkTsCheckerWebpackPlugin(),
      new MiniCssExtractPlugin({
        filename: 'static/css/bundle.[name].[contenthash].css',
      }),
    ],

    devServer: {
      port: 9003,
      host: 'localhost',
      //https: true,
      inline: true,
      hot: true,
      historyApiFallback: true,
      clientLogLevel: 'debug'
    },
  };
};
