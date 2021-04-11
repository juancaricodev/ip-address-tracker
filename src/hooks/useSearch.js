import { useState, useEffect } from 'react'

export const useSearch = (ip) => {
  const [value, setValue] = useState('')

  useEffect(() => {
    setValue(ip)
  }, [ip])

  return value
}
