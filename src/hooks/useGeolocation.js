import { useEffect, useState } from 'react'

const useGeolocation = () => {
  const [data, setData] = useState()

  useEffect(() => {
    const KEY = process.env.IPIFY_KEY
    const ip = ''
    const URL = `https://geo.ipify.org/api/v1?apiKey=${KEY}&ipAddress=${ip}`

    fetch(URL)
      .then(res => res.json())
      .then(res => setData(res))
  }, [])

  return data
}

export default useGeolocation
