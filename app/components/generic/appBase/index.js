import angular from 'angular'

import appBaseSecured from './appBaseSecured'
import appBaseUnsecured from './appBaseUnsecured'

export default angular
	.module('app.components.appBase', [
		appBaseSecured,
		appBaseUnsecured,
	])
	.name
