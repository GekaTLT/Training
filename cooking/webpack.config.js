const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');


module.exports = {
	entry: {
		'bundle.js': path.resolve(__dirname, 'client/index.js'),
		'style.css': path.resolve(__dirname, 'client/sass/style.scss'),
		'index.html': path.resolve(__dirname, 'client/index.html')
	},
	output: {
		path: path.resolve(__dirname, 'public/'),
		publicPath: '',
		filename: '[name]'
	},
 
	module: {
		rules: [
			{
				test: /\.html$/,
				use: [
					{
      					loader: 'html-loader',
      					options: {
      					  minimize: true
      					}
      				}
				]
			},
			{
				test: /\.(scss|sass)$/,
				/*use:[
					{
						loader: 'style-loader'
					},
					{
						loader: 'css-loader',
						options: {
						    minimize: true
						}
					},
					{
						loader: 'postcss-loader'
					},
					{
						loader: 'resolve-url-loader'
					},
					{
						loader: 'sass-loader',
						options: {
						    sourceMap: true
						}
					}
				]*/
				use: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: [
						{
							loader: 'css-loader',
						},
						{
							loader: 'postcss-loader'
						},
						{
							loader: 'resolve-url-loader'
						},
						{
							loader: 'sass-loader',
							options: {
							    sourceMap: true,
							    publicPath:''
							}
						}
					]
				})
			},
			{
				test: /\.(png|svg|jpg|gif)$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							publicPath: '',
							outputPath: 'img/',
							name: '[name].[ext]'
						} 
					}
				]
			},
			{
				test: /\.(woff|woff2|eot|ttf|otf)$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							outputPath: 'font/',
							name: '[name].[ext]'
						} 
					}
				]
			},
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				loader: "babel-loader",
				options: {
					presets: ['env','es2015','react']
				}
			}
 
		]
	},
 
	resolve: {
		modules: ['node_modules'],
		extensions: [".js", ".json", ".jsx", ".css"]
	},
	plugins: [
		new ExtractTextPlugin({
			filename:'style.css',
			allChunks: true
		}),
		new HtmlWebpackPlugin({
			filename: 'index.html',
			template: path.resolve(__dirname, 'client/index.html'),
			excludeChunks: ['style.css','index.html']
		})
	],
    devServer: {
        historyApiFallback: true, //для реакт роутера
    }
};