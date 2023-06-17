// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCUjiFBaaHUWULqhXY4cviy2Ls5pAKf-bE',
  authDomain: 'chat-6adb3.firebaseapp.com',
  projectId: 'chat-6adb3',
  storageBucket: 'chat-6adb3.appspot.com',
  messagingSenderId: '123893310521',
  appId: '1:123893310521:web:f455e63591c950442799e8',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

export const db = getFirestore(app)
