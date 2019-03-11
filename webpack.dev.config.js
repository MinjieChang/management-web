const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const commonConfig = require('./webpack.common.config.js')
const OpenBrowserPlugin = require('open-browser-webpack-plugin')

const devConfig = {
	devtool: 'inline-source-map',
	/*入口*/
	entry: {
		app: ['babel-polyfill', 'react-hot-loader/patch', path.join(__dirname, 'src/index.js')],
		vendor: ['react', 'react-router-dom', 'redux', 'react-dom', 'react-redux']
	},

	/*输出到dist文件夹，输出文件名字为bundle.js*/
	output: {
		path: path.join(__dirname, './dist'),
		filename: '[name].[hash].js',
		chunkFilename: '[name].[chunkhash].js'
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				use: ['babel-loader?cacheDirectory=true'],
				include: path.join(__dirname, 'src')
			},
			{
				test: /\.less$/,
				use: [
					{
						loader: 'style-loader' // creates style nodes from JS strings
					},
					{
						loader: 'css-loader', // translates CSS into CommonJS
						options: {
							sourceMap: true,
							modules: true,
							localIdentName: '[name]-[local]-[hash:base64:5]'
						}
					},
					{
						loader: 'less-loader' // compiles Less to CSS
					}
				]
			},
			{
				test: /\.css$/,
				use: [
					'style-loader',
					'css-loader?modules&localIdentName=[name]-[local]-[hash:base64:5]',
					'postcss-loader'
				]
			},
			{
				test: /\.(png|jpg|gif)$/,
				use: [
					{
						loader: 'url-loader',
						options: {
							limit: 8192
						}
					}
				]
			}
		]
	},
	devServer: {
		contentBase: path.join(__dirname, './dist'),
		// port: '',
		host: '0.0.0.0', // 手机通过ip地址可访问
		proxy: {
			'/api': {
				target: 'http://localhost:8000',
				pathRewrite: { '^/api': '' },
				changeOrigin: true
			}
		},
		historyApiFallback: true,
		hot: true
	},
	resolve: {
		alias: {
			src: path.join(__dirname, 'src'),
			actions: path.join(__dirname, 'src/redux/actions'),
			reducers: path.join(__dirname, 'src/redux/reducers'),
			pages: path.join(__dirname, 'src/pages'),
			component: path.join(__dirname, 'src/component'),
			router: path.join(__dirname, 'src/router')
		}
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new HtmlWebpackPlugin({
			filename: 'index.html',
			template: path.join(__dirname, 'src/index.html')
		}),
		new webpack.optimize.CommonsChunkPlugin({
			name: 'vendor'
		}),
		new OpenBrowserPlugin({
			url: 'http://localhost:8080'
		})
	]
}
module.exports = devConfig
// module.exports = merge({
// 	customizeArray(a, b, key) {
// 		/*entry.app不合并，全替换*/
// 		if (key === 'entry.app') {
// 			return b
// 		}
// 		return undefined
// 	}
// })(commonConfig, devConfig)
