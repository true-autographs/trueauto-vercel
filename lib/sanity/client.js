const sanityClient = require('@sanity/client')

export default sanityClient({
  projectId: 'ryypxqs0',
  dataset: 'production',
  apiVersion: '2021-05-02', // use current UTC date - see "specifying API version"!
  // token: 'sanity-auth-token',
  useCdn: true,
})
