import { getAuthState } from '../api/firebase'
import {
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react'

const AuthContext = createContext()

export default function AuthContextProvider({ children }) {
  const [user, setUser] = useState()

  useEffect(() => {
    getAuthState((user) => {
      setUser(user)
    })
  }, [])

  return (
    <AuthContext.Provider value={{ user }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuthContext() {
  return useContext(AuthContext)
}
