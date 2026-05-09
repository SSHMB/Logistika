/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'

const AuthContext = createContext(null)
const API_BASE = '/api'

const getJson = async (response) => {
  const json = await response.json().catch(() => null)
  if (!response.ok) {
    throw new Error(json?.message || 'Server error')
  }
  return json
}

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem('logistika_user')) || null
    } catch {
      return null
    }
  })

  const [users, setUsers] = useState([])
  const [properties, setProperties] = useState([])

  useEffect(() => {
    localStorage.setItem('logistika_user', JSON.stringify(user))
  }, [user])

  const fetchUsers = useCallback(async () => {
    const response = await fetch(`${API_BASE}/users`)
    const data = await getJson(response)
    setUsers(Array.isArray(data) ? data : [])
    return data
  }, [])

  const fetchProperties = useCallback(async () => {
    const response = await fetch(`${API_BASE}/properties`)
    const data = await getJson(response)
    setProperties(Array.isArray(data) ? data : [])
    return data
  }, [])

  useEffect(() => {
    fetchUsers()
    fetchProperties()
  }, [fetchUsers, fetchProperties])

  const login = useCallback(
    ({ email, password }) => {
      const matchedUser = users.find(
        (item) => item.email.toLowerCase() === email.toLowerCase() && item.password === password,
      )

      if (!matchedUser) {
        return { ok: false, message: 'Email yoki parol noto‘g‘ri.' }
      }

      setUser({
        id: matchedUser.id,
        name: matchedUser.name,
        email: matchedUser.email,
        role: matchedUser.role,
      })

      return { ok: true }
    },
    [users],
  )

  const createUser = useCallback(async ({ name, email, password, role = 'user' }) => {
    const response = await fetch(`${API_BASE}/users`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, password, role }),
    })

    const data = await getJson(response)
    setUsers((prev) => [...prev, data])
    return data
  }, [])

  const signup = useCallback(
    async ({ name, email, password }) => {
      try {
        const nextUser = await createUser({ name, email, password, role: 'user' })
        setUser({ id: nextUser.id, name: nextUser.name, email: nextUser.email, role: nextUser.role })
        return { ok: true }
      } catch (error) {
        return { ok: false, message: error.message }
      }
    },
    [createUser],
  )

  const logout = useCallback(() => {
    setUser(null)
  }, [])

  const api = useMemo(
    () => ({
      getUsers: fetchUsers,
      getProperties: fetchProperties,
      createUser,
    }),
    [fetchUsers, fetchProperties, createUser],
  )

  const value = useMemo(
    () => ({
      user,
      login,
      logout,
      signup,
      users,
      properties,
      api,
    }),
    [user, users, properties, api, login, logout, signup],
  )

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export const useAuth = () => {
  const auth = useContext(AuthContext)
  if (!auth) {
    throw new Error('useAuth must be used inside AuthProvider')
  }
  return auth
}
