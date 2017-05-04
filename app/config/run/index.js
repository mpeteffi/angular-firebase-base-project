export default (AppConstants, $rootScope) => {
	'ngInject'

	$rootScope.$on('$stateChangeSuccess', (event, toState, fromState) => {
		$rootScope.setPageTitle(toState.title)
	})

	$rootScope.setPageTitle = (title) => {
		$rootScope.pageTitle = ''
		if (title) {
			$rootScope.pageTitle += title
			$rootScope.pageTitle += ' \u2014 '
		}
		$rootScope.pageTitle += AppConstants.appName
	}
}
