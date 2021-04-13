
export const get = async (ip) => {
  const KEY = process.env.IPIFY_KEY
  const URL = `https://geo.ipify.org/api/v1?apiKey=${KEY}&ipAddress=${ip}`

  const request = await fetch(URL)
  const response = await request.then(res => res.json())

  return response
}
