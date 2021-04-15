export const ipValid = (input) => {
  const regex = /^((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/
  const validIp = regex.test(input)

  return validIp
}

export const domainValid = (input) => {
  const regex = /^[\w-][\w\-.]+(\.)\w{2,5}$/
  const validDomain = regex.test(input)

  return validDomain
}
