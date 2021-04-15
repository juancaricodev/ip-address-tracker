import React, { createContext, useState } from 'react'

import { useGeolocation } from '@hooks/useGeolocation'
import { useIpPosition } from '@hooks/useIpPosition'

export const Context = createContext({})

export const ContextProvider = ({ children }) => {
  const [ip, setIp] = useState('')

  const geolocation = useGeolocation(ip)

  const position = useIpPosition(geolocation)

  const handleIp = (ip) => {
    setIp(ip)
  }

  return (
    <Context.Provider value={{ geolocation, handleIp, position, ip }}>
      {children}
    </Context.Provider>
  )
}
