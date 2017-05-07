let _loginService

export default class AppHeaderCtrl {
	constructor(loginService) {
		'ngInject'

		_loginService = loginService
	}

	goToFirstPage() {
		// TODO Redirect
	}

	goToSecondPage() {
		// TODO Redirect
	}

	logout() {
		_loginService.logout()
	}
}
