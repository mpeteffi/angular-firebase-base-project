const merge = require('webpack-merge')
const webpack = require('webpack')
var path = require('path')
var glob = require('glob')
const purifyCss = require('purifycss-webpack')
const extractTextPlugin = require('extract-text-webpack-plugin')

const prodConfig = (config) => {
	const { rootPath } = config

	const rules = [
		{
			test: /\.css$/,
			loader: extractTextPlugin.extract({
      	fallback: 'style-loader',
        use: [
					'css-loader?sourceMap',
					'postcss-loader',
					'resolve-url-loader',
				],
			}),
		},
		{
			test: /\.scss$/,
			loader: extractTextPlugin.extract({
      	fallback: 'style-loader',
        use: [
					'css-loader?sourceMap',
					'postcss-loader',
					'resolve-url-loader',
					'sass-loader?sourceMap',
				],
			}),
		},
	]

	const plugins = [
		new extractTextPlugin({
			filename: 'css/[name].[chunkhash].css',
			allChunks: true,
		}),
		new purifyCss({
			paths: [ `${rootPath}/app/views/index.html` ],
			minimize: true,
		}),
		new webpack.optimize.UglifyJsPlugin({ mangle: false }),
	]

	return { 
		plugins,
		module: { rules },
 	}
}

module.exports = (config) => {
	const baseConfig = require(`./webpack.base.config.js`)(config)
	return merge(baseConfig, prodConfig(config))
}
