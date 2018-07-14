const path = require('path');

const publicDir = path.join(__dirname, '/public');
module.exports = (env, argv) => ([
  {
    entry: [
      'babel-polyfill',
      './src/index.jsx',
    ],
    output: {
      path: publicDir,
      publicPath: '/',
      filename: 'bundle.js',
    },
    module: {
      rules: [
        {
          test: [/\.js$/, /\.jsx$/],
          use: [
            {
              loader: 'babel-loader',
              options: {
                presets: [
                  ['env', { modules: false }],
                  'react',
                ],
              },
            },
          ],
          exclude: /node_modules/,
        },
        {
          test: /\.css/,
          use: [
            'style-loader',
            {
              loader: 'css-loader',
              options: { url: false },
            },
          ],
        },
      ],
    },
    resolve: {
      extensions: ['.js', '.jsx'],
    },
    devServer: {
      historyApiFallback: true,
      contentBase: publicDir,
    },
    devtool: argv.mode === 'development' ? 'inline-source-map' : '',
  },
]);
