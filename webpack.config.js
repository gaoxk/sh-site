const HtmlWebPackPlugin = require('html-webpack-plugin');
module.exports = {
	entry: './src/index.js',
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: [
					{
						loader: 'babel-loader',
						options: {
							presets: ['react']
						}
					}
				],
			},
			{
				test: /\.html$/,
				use: [
					{
						loader: 'html-loader'
					}
				]
			},
			{
				test: /\.(png|jpg|gif|svg|PNG)$/,
				use: [
					{
						loader: 'file-loader',
						options: {}
					}
				]
			},
			{
				test: /\.css$/,
				use: [ 'style-loader', 'css-loader' ]
			}
		]
	},
	plugins: [
		new HtmlWebPackPlugin({
			template: './public/index.html',
			favicon: './public/mini_logo.png'
		})
	]
};
