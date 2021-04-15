import React, { createContext, useState } from 'react'

import { useGeolocation } from '@hooks/useGeolocation'
import { useIpPosition } from '@hooks/useIpPosition'

export const Context = createContext({})

export const ContextProvider = ({ children }) => {
  const [ip, setIp] = useState('')
  const [domain, setDomain] = useState('')

  const geolocation = useGeolocation(ip, domain)

  const position = useIpPosition(geolocation)

  const handleIp = (ip) => {
    setIp(ip)
    setDomain('')
  }

  const handleDomain = (domain) => {
    setDomain(domain)
    setIp('')
  }

  return (
    <Context.Provider value={{ geolocation, handleIp, handleDomain, position, ip, domain }}>
      {children}
    </Context.Provider>
  )
}
