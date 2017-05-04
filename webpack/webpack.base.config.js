const autoprefixer = require('autoprefixer')
const cleanPlugin = require('clean-webpack-plugin')
const webpack = require('webpack')
const htmlWebpackPlugin = require('html-webpack-plugin')

module.exports = (config) => {
	const { rootPath, appPath, publicPath } = config

	const entry = `${appPath}/app.js`

	const output = {
		path: publicPath,
		filename: 'bundle.js',
	}

	const browserslist = [
		'>1%',
		'last 4 versions',
		'Firefox ESR',
		'ie 11',
	]

	const plugins = [
		new cleanPlugin([publicPath], {
			root: rootPath,
      verbose: true, 
      dry: false,
		}),
		new webpack.LoaderOptionsPlugin({
			minimize: true,
			options: {
				postcss: [ 
					autoprefixer({ browserslist }), 
				],
			}
		}),
		new htmlWebpackPlugin({
			template: `${appPath}/views/index.html`,
			inject: 'body',
		}),
		new webpack.optimize.CommonsChunkPlugin({
			name: 'vendor',
			filename: 'vendor.js',
			minChunks: 3,
		}),
	]

	const rules = [
		{
			test: /\.js/,
			enforce: "pre",
			loader: 'eslint-loader',
		},
		{
			test: /\.js$/,
			exclude: /node_modules/,
			loader: 'babel-loader',
		},
		{
			test: /\.html$/,
			use: [
			{
					loader: 'html-loader',
					options: { minimize: false },
				},
			],
		},
		{
			test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
			use: [
			{
					loader: 'url-loader',
					options: { 
						name: 'fonts/[name]',
						mimetype: 'application/font-woff',
					},
				},
			],
		},
		{
			test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
			use: [
			{
					loader: 'url-loader',
					options: { 
						name: 'fonts/[name]',
						mimetype: 'application/font-woff',
					},
				},
			],
		},
		{
			test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
			use: [
			{
					loader: 'url-loader',
					options: { 
						name: 'fonts/[name]',
						mimetype: 'application/octet-stream',
					},
				},
			],
		},
		{
			test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
			use: [
			{
					loader: 'file-loader',
					options: { name: 'fonts/[name]' },
				},
			],
		},
		{
			test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
			use: [
			{
					loader: 'url-loader',
					options: { 
						name: 'fonts/[name]',
						limit: 10000,
						mimetype: 'image/svg+xml',
					},
				},
			],
		},
		{
			test: /\.(jpe?g|png|gif|svg|ico)$/i,
			use: [
			{
					loader: 'url-loader',
					options: { name: 'img/[name].[ext]' },
				},
			],
		},
	]

	const stats = {
		children: false,
	}

	return {
		entry,
		output,
		plugins,
		stats,
		module: { rules },
	}
}