const merge = require('webpack-merge')
const webpack = require('webpack')

const devConfig = (config) => {
	const { appPath } = config
	
	const devServer = {
		inline: true,
		contentBase: `${appPath}/views/`,
		port: 3333,
	}

	const rules = [
		{
			test: /\.css$/,
			use: [
				'style-loader',
				'css-loader?sourceMap',
				'postcss-loader',
				'resolve-url-loader',
			],
		},
		{
			test: /\.scss$/,
			use: [
				'style-loader',
				'css-loader?sourceMap',
				'postcss-loader',
				'resolve-url-loader',
				'sass-loader?sourceMap',
			],
		},
	]

	const plugins = [
		new webpack.HotModuleReplacementPlugin(),
	]

	return { 
		devtool: 'inline-source-map',
		devServer,
		plugins,
		module: { rules },
 	}
}

module.exports = (config) => {

	const baseConfig = require(`./webpack.base.config.js`)(config)
	return merge(baseConfig, devConfig(config))
}
