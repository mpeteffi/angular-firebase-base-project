import angular from 'angular'

import uiAnimate from './angular-animate'
import uiBootstrap from './angular-ui-bootstrap'
import uiRouter from './angular-ui-router'

// Estes imports não são módulos angular
import './firebase'

export default angular
	.module('app.libs', [
		uiAnimate,
		uiBootstrap,
		uiRouter,
	])
	.name
