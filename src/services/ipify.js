export const getIp = (ip) => {
  const KEY = process.env.IPIFY_KEY
  const URL = `https://geo.ipify.org/api/v1?apiKey=${KEY}&ipAddress=${ip}`

  const request = fetch(URL)
  const response = request.then(res => res.json())

  return response
}

export const getDomain = (domain) => {
  const KEY = process.env.IPIFY_KEY
  const URL = `https://geo.ipify.org/api/v1?apiKey=${KEY}&domain=${domain}`

  const request = fetch(URL)
  const response = request.then(res => res.json())

  return response
}
