module.exports = (env = 'dev') => { 
	
	const config = {
		rootPath: __dirname,
		appPath: __dirname + '/app',
		publicPath: __dirname + '/public',
	}

	return require(`./webpack/webpack.${env}.js`)(config) 
}
