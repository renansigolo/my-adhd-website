// Import the functions you need from the SDKs you need
import { getApp, initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID
}

// Initialize Firebase
function createFirebaseApp(config) {
  try {
    return getApp()
  } catch {
    return initializeApp(config)
  }
}
const firebaseApp = createFirebaseApp(firebaseConfig)

// Auth exports
export const auth = getAuth(firebaseApp)

// Firestore exports
export const firestore = getFirestore(firebaseApp)

// Storage exports
export const storage = getStorage(firebaseApp)
export const STATE_CHANGED = "state_changed"

// Get/read a document once
// const collectionRef = collection(firestore, "configs")
// export const getDocData = async () => {
//   const docSnap = await getDoc(documentRef)

//   if (docSnap.exists()) {
//     console.log("Document data:", docSnap.data())
//     return docSnap.data()
//   }
// }

// Usage
// const runConfig = async () => {
//   return getDocData()
//     .then((data) => data)
//     .catch((err) => err)
// }

// runConfig().then((data) => console.log("🚀 ~ data", data))

// Initialize Configure Remote Config
// export const remoteConfig = getRemoteConfig(firebaseApp)
// remoteConfig.settings.minimumFetchIntervalMillis = 3600000
// remoteConfig.defaultConfig = {
//   welcome_message: "Welcome"
// }

// // Configure Remote Config
// fetchAndActivate(remoteConfig)
//   .then((activated) => {
//     if (!activated) console.log("not activated")
//     console.log("🚀 ~ fetchAndActivate ~ activated", activated)
//     console.log("🚀 ~ .then ~ getAll(remoteConfig)", getAll(remoteConfig))
//     return getAll(remoteConfig)
//   })
//   .catch((err) => {
//     console.log("🚀 ~ err", err)
//   })

// For usage throughout the app
// export const welcomeMessage = getValue(remoteConfig, "welcome_messsage")
// export const diagnosticsEnabled = getValue(remoteConfig, "diagnostics_enabled")
