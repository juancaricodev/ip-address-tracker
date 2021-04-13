import React, { createContext, useState } from 'react'

import { useGeolocation } from '@hooks/useGeolocation'

export const Context = createContext({})

export const ContextProvider = ({ children }) => {
  const [ip, setIp] = useState('')

  const geolocation = useGeolocation(ip)

  const handleIp = (ip) => {
    setIp(ip)
  }

  return (
    <Context.Provider value={{ geolocation, handleIp }}>
      {children}
    </Context.Provider>
  )
}
