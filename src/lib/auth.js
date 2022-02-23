import {
  GoogleAuthProvider,
  OAuthProvider,
  signInWithPopup,
  signOut
} from "firebase/auth"
import { auth } from "./firebase"

// Sign in with popup && Google as the provider
// const googleProvider = new GoogleAuthProvider()
// const appleProvider = new OAuthProvider("apple.com")
// appleProvider.addScope("email")
// appleProvider.addScope("name")

export const handleSignIn = async (providerName) => {
  providerName === "google" ? googleSignIn() : appleSignIn()

  // await signInWithPopup(auth, provider)
  //   .then((user) => {
  //     console.log(user)
  //   })
  //   .catch((error) => {
  //     console.error(error)
  //   })
}

export const googleSignIn = async () => {
  const googleProvider = new GoogleAuthProvider()

  await signInWithPopup(auth, googleProvider)
    .then((user) => {
      console.log(user)
    })
    .catch((error) => {
      console.error(error)
    })
}

export const appleSignIn = async () => {
  const appleProvider = new OAuthProvider("apple.com")
  appleProvider.addScope("email")
  appleProvider.addScope("name")

  await signInWithPopup(auth, appleProvider)
    .then((result) => {
      // The signed-in user info.
      const user = result.user
      console.log(user)

      // Apple credential
      // const credential = OAuthProvider.credentialFromResult(result)
      // const accessToken = credential.accessToken
      // const idToken = credential.idToken
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code
      const errorMessage = error.message
      // The email of the user's account used.
      const email = error.email
      // The credential that was used.
      const credential = OAuthProvider.credentialFromError(error)
    })
}

// Sign out
export const signOutUser = async () => {
  await signOut(auth)
    .then(() => {
      console.log("User signed out")
    })
    .catch((error) => {
      console.error("There was an error signing out")
    })
}
