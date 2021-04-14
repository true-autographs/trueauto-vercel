import { shopifyConfig } from '@framework'
import { getConfig, ShopifyConfig } from '../api'

/* const getAllCollectionsQuery = `
{
    shop {
      collections(first: 250) {
        edges {
          node {
            id
            title
            description
            descriptionHtml
            handle
            image {
              id
            }
            updatedAt
          }
        }
      }
    }
  }
` */

const getAllCollectionsQuery = /* GraphQL */ `
{
    shop {
      collections(first: 250) {
        edges {
          node {
            id
            title
          }
        }
      }
    }
  }
`

const getSearchHierarchy = async () => {
    let config = getConfig(shopifyConfig)

    const collections = await config.fetch(getAllCollectionsQuery)


}