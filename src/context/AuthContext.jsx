import { createContext, useContext, useEffect, useState } from 'react'

// DEMO-ONLY authentication. Passwords are stored in plain text in
// localStorage purely so a beginner project can show a working login
// flow without a backend. Never do this in a real product -- see the
// README's Security & Privacy section.

const AuthContext = createContext(null)
const USERS_KEY = 'shopnest_users'
const SESSION_KEY = 'shopnest_session'

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    try {
      const saved = localStorage.getItem(SESSION_KEY)
      return saved ? JSON.parse(saved) : null
    } catch {
      return null
    }
  })

  useEffect(() => {
    if (user) localStorage.setItem(SESSION_KEY, JSON.stringify(user))
    else localStorage.removeItem(SESSION_KEY)
  }, [user])

  const getUsers = () => {
    try {
      return JSON.parse(localStorage.getItem(USERS_KEY)) || []
    } catch {
      return []
    }
  }

  const register = (name, email, password) => {
    const users = getUsers()
    if (users.some((u) => u.email === email)) {
      return { ok: false, message: 'An account with this email already exists.' }
    }
    const newUser = { name, email, password }
    localStorage.setItem(USERS_KEY, JSON.stringify([...users, newUser]))
    setUser({ name, email })
    return { ok: true }
  }

  const login = (email, password) => {
    const users = getUsers()
    const found = users.find((u) => u.email === email && u.password === password)
    if (!found) return { ok: false, message: 'Incorrect email or password.' }
    setUser({ name: found.name, email: found.email })
    return { ok: true }
  }

  const logout = () => setUser(null)

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)
