import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'

const provider = new GoogleAuthProvider()
const auth = getAuth()
signInWithPopup(auth, provider)
  .then((result) => {
    const user = result.user
    console.log(user)
  })
  .catch(console.error)
