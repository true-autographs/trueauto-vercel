import Prismic from 'prismic-javascript'

// Prismic API endpoint
//export const apiEndpoint = process.env.PRISMIC_URL
export const apiEndpoint = 'https://trueautographscom.cdn.prismic.io/api/v2'

// Access Token if the repository is not public
// Generate a token in your dashboard and configure it here if your repository is private
//export const accessToken = process.env.PRISMIC_TOKEN
export const accessToken =
  'MC5ZRmtKbEJNQUFDTUFKOEZO.77-9d--_ve-_ve-_vRHvv707GA8eX2hpZTYC77-977-977-977-977-977-977-9bXdo77-977-9RO-_vVc'

// Client method to query Prismic
export const client = Prismic.client(apiEndpoint, { accessToken })
