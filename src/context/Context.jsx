import React, { createContext, useEffect, useState } from 'react'
// import { useGeolocation } from '@hooks/useGeolocation'

export const Context = createContext({})

export const ContextProvider = ({ children }) => {
  const [geolocation, setGeolocation] = useState()
  const [ip, setIp] = useState('')

  // const ip = ''
  const KEY = process.env.IPIFY_KEY
  const URL = `https://geo.ipify.org/api/v1?apiKey=${KEY}&ipAddress=${ip}`

  useEffect(() => {
    fetch(URL)
      .then(res => res.json())
      .then(res => setGeolocation(res))
  }, [ip])

  const handleIp = (ip) => {
    setIp(ip)
  }

  return (
    <Context.Provider value={{ geolocation, handleIp }}>
      {children}
    </Context.Provider>
  )
}
