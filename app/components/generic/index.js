import angular from 'angular'

import appBase from './appBase'
import appHeader from './appHeader'

export default angular
	.module('app.generic', [
		appBase,
		appHeader,
	])
	.name
