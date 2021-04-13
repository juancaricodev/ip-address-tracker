import React, { createContext } from 'react'
import { useGeolocation } from '@hooks/useGeolocation'

export const Context = createContext({})

export const ContextProvider = ({ children }) => {
  useGeolocation()

  return (
    <Context.Provider value={{ useGeolocation }}>
      {children}
    </Context.Provider>
  )
}
