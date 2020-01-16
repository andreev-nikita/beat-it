const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = (env = {}) => {
  const { mode = 'development' } = env;

  const isDev = mode === 'development';
  const isProd = mode === 'production';

  const getCssLoaders = () => {
    return [
      isProd ? MiniCssExtractPlugin.loader : 'style-loader',
      {
        loader: 'css-loader',
        options: {
          modules: {
            localIdentName: '[local]--[hash:base64:5]',
          },
        },
      },
    ];
  };

  const getPlugins = () => {
    const plugins = [
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        template: 'public/index.html',
      }),
    ];

    if (isProd) {
      plugins.push(
        new MiniCssExtractPlugin({
          filename: 'main-[contenthash:8].css',
        })
      );
    }

    return plugins;
  };

  return {
    mode: isDev ? 'development' : isProd && 'production',

    output: {
      filename: isProd ? 'main-[hash:8].js' : undefined,
    },

    module: {
      rules: [
        // loading js
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
        },

        // loading images
        {
          test: /\.(png|gif|jpe?g)$/,
          loader: 'file-loader',
          options: {
            outputPath: 'images',
            name: '[name]-[hash:8].[ext]',
          },
        },

        // loading fonts
        {
          test: /\.(eot|ttf|otf|woff|woff2)$/,
          loader: 'file-loader',
          options: {
            outputPath: 'fonts',
            name: '[name].[ext]',
          },
        },

        // loading css styles
        {
          test: /\.css$/,
          use: getCssLoaders(),
        },

        // loading sass/scss styles
        {
          test: /\.s[ac]ss$/,
          use: [
            ...getCssLoaders(),
            {
              loader: 'sass-loader',
              options: {
                implementation: require('sass'),
              },
            },
          ],
        },
      ],
    },

    plugins: getPlugins(),

    devServer: {
      open: true,
    },
  };
};
