const path = require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js'
  },
  module: {
    rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env']
					}
				}
			},
			{
				test: /\.(sa|sc|c)ss$/,
				exclude: /node_modules/,
        use: ['style-loader', 'css-loader', 'sass-loader']
			},	
			{
        test: /\.(png|svg|jpe?g|gif)$/,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },	
    ]
  },
  plugins: [
      new HtmlWebPackPlugin({
          template: './src/index.html',
          filename: './index.html'
      })
  ]
}