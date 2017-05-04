import angular from 'angular'

import pageFirst from './pageFirst'
import pageLogin from './pageLogin'
import pageSecond from './pageSecond'

export default angular
	.module('app.pages', [
		pageFirst,
		pageLogin,
		pageSecond,
	])
	.name
