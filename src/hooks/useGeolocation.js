import { useEffect, useState } from 'react'

import { getIp } from '@services/ipify'

export const useGeolocation = (ip) => {
  const [geolocation, setGeolocation] = useState()

  useEffect(() => {
    getIp(ip)
      .then(res => setGeolocation(res))
      .catch(err => console.error(`Error fetching ip geolocation => ${err}`))
  }, [ip])

  return geolocation
}
