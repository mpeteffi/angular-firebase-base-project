export default ($rootScope) => {
	'ngInject'

	$rootScope.$on('$stateChangeSuccess', (event, toState, fromState) => {
		$rootScope.setPageTitle(toState.title)
	})
}
