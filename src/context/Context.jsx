import React, { createContext, useEffect, useState } from 'react'

import { getIp } from '@services/ipify'
import { useGeolocation } from '@hooks/useGeolocation'

export const Context = createContext({})

export const ContextProvider = ({ children }) => {
  // const [geolocation, setGeolocation] = useState()
  const [ip, setIp] = useState('')

  const geolocation = useGeolocation(ip)

  // useEffect(() => {
  //   getIp(ip)
  //     .then(res => setGeolocation(res))
  // }, [ip])

  const handleIp = (ip) => {
    setIp(ip)
  }

  return (
    <Context.Provider value={{ geolocation, handleIp }}>
      {children}
    </Context.Provider>
  )
}
