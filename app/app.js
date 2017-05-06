import angular from 'angular'

import STATES from './config/states'
import routes from './config/routes'
import appRun from './config/run'

import components from './components'
import filters from './filters'
import libs from './libs'
import services from './services'

import './assets'

angular.module('app', [
	components,
	filters,
	libs,
	services,
])
.constant('STATES', STATES)
.config(routes)
.run(appRun)
