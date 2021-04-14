/* 
Get Everything in Shop:
https://shopify.dev/docs/admin-api/graphql/examples/shop
*/



const getAllTypesQuery = /* GraphQL */ `
    {
        shop {
            productTypes(first: 250) {
                edges {
                    node {

                    }
                }
            }
        }
    }
`

const getAllProductCollections = /* GraphQL */ `
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
`

const getProductsOfType = /* GraphQL */ `

`

const getAllTagsQuery = /* GraphQL */ `
{
    shop {
      productTags(first: 250) {
        edges {
          node
        }
      }
    }
  }
`

const getAllRelevantShopInfoQuery = /* GraphQL */ `
{
    shop {
      checkoutApiSupported
      contactEmail
      countriesInShippingZones {
        countryCodes
      }
      currencyCode
      currencyFormats {
        moneyFormat
      }
      currencySettings (first: 250){
        edges {
          node {
            rateUpdatedAt
          }
        }
      }
      description
      domains {
        id
      }
      enabledPresentmentCurrencies
      features {
        branding
        storefront
        captcha
        captchaExternalDomains
        dynamicRemarketing
        giftCards
        harmonizedSystemCode
        internationalDomains
        internationalPriceRules
        internationalPriceOverrides
        multiLocation
      }
      fulfillmentServices {
        id
      }
      ianaTimezone
      id
      metafields (first: 250){
        edges {
          node {
            id
          }
        }
      }
      myshopifyDomain
      name
      navigationSettings {
        id
      }
      paymentSettings {
        supportedDigitalWallets
      }
      plan {
        displayName
        partnerDevelopment
        shopifyPlus
      }
      primaryDomain {
        id
      }
      productTags (first: 250){
        edges {
          node
        }
      }
      productTypes (first: 250){
        edges {
          node
        }
      }
      productVendors (first: 250){
        edges {
          node
        }
      }
      publicationCount
      resourceLimits {
        locationLimit
        maxProductVariants
        redirectLimitReached
        skuResourceLimits {
          quantityAvailable
          quantityLimit
          quantityUsed
        }
      }
      richTextEditorUrl
      setupRequired
      taxShipping
      taxesIncluded
      timezoneAbbreviation
      timezoneOffset
      timezoneOffsetMinutes
      unitSystem
      url
      weightUnit
    }
  }
`




/* {
    shop {
        products(first:250, query:"-product_type:''") {
            edges {
                node {
                    productType
                }
            }
        }
    }
} */
