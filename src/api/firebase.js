import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth'

// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import {
  getDatabase,
  ref,
  child,
  get,
} from 'firebase/database'

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket:
    process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

const provider = new GoogleAuthProvider()
const auth = getAuth()

const database = getDatabase(app)

export async function login(callback) {
  await signInWithPopup(auth, provider)
    .then((result) => {
      callback()
    })
    .catch(console.error)
}

export async function logout(callback) {
  await signOut(auth).then(() => callback())
}

export function getAuthState(callback) {
  onAuthStateChanged(auth, async (user) => {
    const updatedUser = user
      ? await getUserRole(user)
      : null
    callback(updatedUser)
  })
}

async function getUserRole(user) {
  return get(ref(database, 'admins')).then((snapshot) => {
    if (snapshot.exists) {
      const admins = snapshot.val()
      const isAdmin = admins.includes(user.uid)
      return {
        ...user,
        isAdmin,
      }
    }
  })
}
