import { useEffect, useState } from 'react'

import { getIp } from '@services/ipify'

export const useGeolocation = (ip) => {
  const [geolocation, setGeolocation] = useState()

  useEffect(() => {
    getIp(ip)
      .then(res => setGeolocation(res))
  }, [ip])

  return geolocation
}
