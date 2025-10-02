const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (env, argv) => {
  const mode = argv.mode || 'development';
  const isDev = mode !== 'production';

  return {
    mode,
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: isDev ? 'js/[name].js' : 'js/[name].[contenthash:8].js',
      assetModuleFilename: 'assets/[name][hash][ext][query]',
      clean: true
    },
    devtool: isDev ? 'eval-cheap-module-source-map' : 'source-map',
    resolve: {
      extensions: ['.ts', '.tsx', '.js', '.jsx'],
      alias: { '@': path.resolve(__dirname, 'src') }
    },
    module: {
      rules: [
        { test: /\.[jt]sx?$/, use: 'ts-loader', exclude: /node_modules/ },
        {
          test: /\.module\.s[ac]ss$/,
          use: [
            isDev
              ? { loader: 'style-loader', options: { esModule: true } }
              : { loader: MiniCssExtractPlugin.loader, options: { esModule: true } },
            {
              loader: 'css-loader',
              options: {
                esModule: true,
                modules: { namedExport: false, localIdentName: isDev ? '[local]_[hash:base64:5]' : '[hash:base64:7]' },
                importLoaders: 2
              }
            },
            'postcss-loader',
            {
              loader: 'sass-loader',
              options: {
                additionalData: '@use "mixins" as *;\n',
                sassOptions: { loadPaths: [path.resolve(__dirname, 'src', 'styles')] }
              }
            }
          ]
        },
        {
          test: /\.s[ac]ss$/,
          exclude: /\.module\.s[ac]ss$/,
          use: [
            isDev
              ? { loader: 'style-loader', options: { esModule: true } }
              : { loader: MiniCssExtractPlugin.loader, options: { esModule: true } },
            { loader: 'css-loader', options: { importLoaders: 2 } },
            'postcss-loader',
            {
              loader: 'sass-loader',
              options: {
                additionalData: '@use "mixins" as *;\n',
                sassOptions: { loadPaths: [path.resolve(__dirname, 'src', 'styles')] }
              }
            }
          ]
        },
        {
          test: /\.css$/,
          use: [
            isDev
              ? { loader: 'style-loader', options: { esModule: true } }
              : { loader: MiniCssExtractPlugin.loader, options: { esModule: true } },
            'css-loader',
            'postcss-loader'
          ]
        },
        { test: /\.(png|jpe?g|gif|svg|webp|ico)$/i, type: 'asset/resource' },
        { test: /\.(woff2?|eot|ttf|otf)$/i, type: 'asset/resource' }
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({ template: path.resolve(__dirname, 'public', 'index.html') }),
      new MiniCssExtractPlugin({ filename: isDev ? 'css/[name].css' : 'css/[name].[contenthash:8].css' })
    ],
    devServer: {
      static: path.resolve(__dirname, 'public'),
      port: 5173,
      hot: true,
      open: true,
      historyApiFallback: true
    },
    performance: { hints: false }
  };
};