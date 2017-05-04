export default ($stateProvider, $urlRouterProvider, STATES) => {
	'ngInject'
	$urlRouterProvider.otherwise('/login')

	$stateProvider

	/*
	*	States Abstratos - Bases das telas seguras e inseguras
	*/
	.state(STATES.unsecured_base, {
		url: '',
		abstract: true,
		template: '<app-base-unsecured>',
	})
	.state(STATES.secured_base, {
		url: '',
		abstract: true,
		template: '<app-base-secured>',
	})

	/*
	*	Telas Inseguras
	*/
	.state(STATES.unsecured_login, {
		url: '/login',
		views: {
			[`content@${STATES.unsecured_base}`]: {
				template: '<page-login>',
			},
		},
	})

	/*
	*	Telas Seguras
	*/
	.state(STATES.secured_first, {
		url: '/first',
		views: {
			[`content@${STATES.secured_base}`]: {
				template: '<page-first>',
			},
		},
	})
	.state(STATES.secured_second, {
		url: '/second',
		views: {
			[`content@${STATES.secured_base}`]: {
				template: '<page-second>',
			},
		},
	})
}
