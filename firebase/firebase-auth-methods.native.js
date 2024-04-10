import { GoogleAuthProvider, signInWithCredential, signOut } from "firebase/auth"
import { GoogleSignin } from '@react-native-google-signin/google-signin'
import { auth } from "./firebase"

GoogleSignin.configure({ webClientId: "" })

export function logIn() {
  GoogleSignin.signIn()
  .then(result => {
    const idToken = result.idToken
    const credential = GoogleAuthProvider.credential(idToken)
    signInWithCredential(auth, credential)
  })
}

export function logOut() {
  GoogleSignin.signOut()
  signOut(auth)
}