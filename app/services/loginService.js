import angular from 'angular'
import firebase from 'firebase/app'

let isAutenticated
const getUser = () => {
	return firebase.auth().currentUser
}

class LoginService {
	constructor() {
		'ngInject'

		this.init()
	}

	init() {
		this.startEventListener()
	}

	/*
		Actions
	*/
	login({ email, password }) {
		firebase.auth().signInWithEmailAndPassword(email, password)
    .catch((error) => this.trataErrosLogin(error))
	}

	logout() {
		firebase.auth().signOut()
    .catch((error) => this.trataErrosLogout(error))
	}

	/*
		Event Listener
	*/
	startEventListener() {
		// Esta função é ativada toda vez que o estado de autenticação do usuário mudar
		firebase.auth().onAuthStateChanged((user) => {
			if (user) {
				console.log('mudou auth para logado')
				isAutenticated = true
				// redirecionar para pagina segura inicial
			} else {
				console.log('mudou auth para deslogado')
				isAutenticated = false
				// redirecionar para página de login
			}
		})
	}

	/*
		User API
	*/
	isUserAutenticated() {
		return !!isAutenticated
	}

	getUserEmail() {
		const user = getUser()
		return user ? user.email : ''
	}

	/*
		Service Utils
	*/
	trataLoginError(error) {
		// TODO
		console.log('erro no login', error)
	}

	trataLogoutError(error) {
		// TODO
		console.log('erro no logout', error)
	}
}

export default angular
	.module('loginService', [])
	.service('loginService', LoginService)
	.name
