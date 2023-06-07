const { createContext, useState } = require('react')

const AuthContext = createContext()

export default function AuthContextProvider({ children }) {
  const [user, setUser] = useState()
  return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>
}
