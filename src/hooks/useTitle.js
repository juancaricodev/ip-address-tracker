import { useState, useEffect } from 'react'

export const useTitle = (ip, domain) => {
  const [title, setTitle] = useState('IP Address Tracker')

  useEffect(() => {
    if (ip.length > 0) {
      setTitle(`${ip} | IP Address Tracker`)
    } else if (domain.length > 0) {
      setTitle(`${domain} | IP Address Tracker`)
    }
  }, [ip, domain])

  return title
}
