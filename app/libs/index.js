import angular from 'angular'

import uiAnimate from './angular-animate'
import uiBootstrap from './angular-ui-bootstrap'
import uiRouter from './angular-ui-router'

export default angular
	.module('app.libs', [
		uiAnimate,
		uiBootstrap,
		uiRouter,
	])
	.name
