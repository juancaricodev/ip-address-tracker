import { useEffect, useState } from 'react'
import { useSearch } from '@hooks/useSearch'

export const useGeolocation = () => {
  const [data, setData] = useState()
  const [ip, setIp] = useState('')

  const value = useSearch()

  const KEY = process.env.IPIFY_KEY
  const URL = `https://geo.ipify.org/api/v1?apiKey=${KEY}&ipAddress=${ip}`

  useEffect(() => {
    setIp(value)
  }, [value])

  useEffect(() => {
    fetch(URL)
      .then(res => res.json())
      .then(res => setData(res))
  }, [])

  return data
}
