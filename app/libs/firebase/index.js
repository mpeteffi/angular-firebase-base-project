import firebase from 'firebase/app'
import config from './config'

// Aqui são importados apenas os módulos que serão utilizados
import 'firebase/auth'

firebase.initializeApp(config)
