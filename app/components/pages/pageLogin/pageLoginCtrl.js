let _loginService

export default class PageLoginCtrl {
	constructor(loginService) {
		'ngInject'

		_loginService = loginService

		this.init()
	}

	init() {
		this.form = {}
	}

	login() {
		_loginService.login(this.form)
	}
}
