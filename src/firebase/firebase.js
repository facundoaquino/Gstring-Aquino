import firebase from 'firebase/app'
import 'firebase/firestore'

var firebaseConfig = {
	apiKey: 'AIzaSyD4SVnXMWKVa68HJgV3bYuH4RWALJnIUWQ',
	authDomain: 'coderhouse-ecommerce-322cc.firebaseapp.com',
	projectId: 'coderhouse-ecommerce-322cc',
	storageBucket: 'coderhouse-ecommerce-322cc.appspot.com',
	messagingSenderId: '955062718048',
	appId: '1:955062718048:web:5644be19b46780f5b6fd05',
}

firebase.initializeApp(firebaseConfig)

export default firebase.firestore()
