// Import the functions you need from the SDKs you need
import { getApp, initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
import {
  collection,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore"

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
}

// Initialize Firebase
function createFirebaseApp() {
  try {
    return getApp()
  } catch {
    return initializeApp(firebaseConfig)
  }
}
const firebaseApp = createFirebaseApp()

// Auth exports
export const auth = getAuth(firebaseApp)

// Firestore exports
export const db = getFirestore(firebaseApp)

// Storage exports
// export const storage = getStorage(firebaseApp)
// export const STATE_CHANGED = "state_changed"

// Database Helpers

// /**
//  * Gets firebase collection documents
//  * @param {string} collectionTitle
//  * @returns documents in the collection
//  */
// export async function getDocuments(collectionTitle) {
//   const collectionRef = collection(db, collectionTitle)
//   const collectionSnapshot = await getDocs(collectionRef)
//   return collectionSnapshot.docs.map((doc) => doc.data())
// }

/**
 * Gets firebase collection documents with i18n
 * @param {string} collectionTitle - collection to query
 * @param {string} locale - a two-letter language code
 * @returns documents in the collection
 */
export async function getDocumentsIntl(
  collectionTitle: string,
  locale: string,
) {
  const languagePath = `i18n.${locale.slice(0, 2)}`
  const collectionRef = collection(db, collectionTitle)
  const collectionQuery = query(collectionRef, where(languagePath, "!=", null))
  const collectionSnapshot = await getDocs(collectionQuery)
  return collectionSnapshot.docs.map((doc) => doc.get(languagePath))
}
