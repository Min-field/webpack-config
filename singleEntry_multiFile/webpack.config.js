const webpack = require('webpack')
const path = require('path')

module.exports = {
  entry: ['./a.js', './b.js'],
  output: {
    path: path.resolve(__dirname),
    filename: '[name].js'
  }
}
