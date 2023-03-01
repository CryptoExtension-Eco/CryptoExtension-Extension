const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: {
    popup: './public/popup.js'
  },
  output: {
    path: __dirname + '/build',
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|jpg|gif|svg)$/i,
        type: 'asset/resource'
      }
    ]
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        { from: 'public', to: '.' }
      ]
    })
  ]
};
