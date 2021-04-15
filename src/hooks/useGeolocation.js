import { useEffect, useState } from 'react'

import { getIp, getDomain } from '@services/ipify'

export const useGeolocation = (ip, domain) => {
  const [geolocation, setGeolocation] = useState()

  useEffect(() => {
    if (domain.length > 0) {
      getDomain(domain)
        .then(res => setGeolocation(res))
        .catch(err => console.error(`Error fetching ip geolocation => ${err}`))
    } else {
      getIp(ip)
        .then(res => setGeolocation(res))
        .catch(err => console.error(`Error fetching ip geolocation => ${err}`))
    }
  }, [ip, domain])

  return geolocation
}
