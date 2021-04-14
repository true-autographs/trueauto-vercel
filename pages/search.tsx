import cn from 'classnames'
import type { GetStaticPropsContext, InferGetStaticPropsType } from 'next'
import Link from 'next/link'
import { useState } from 'react'
import { useRouter } from 'next/router'

import { Layout } from '@components/common'
import { ProductCard, ProductGrid } from '@components/product'
import { Container, Grid, Skeleton, ContentSection } from '@components/ui'

import { getConfig } from '@framework/api'
import useSearch from '@framework/product/use-search'
import getAllPages from '@framework/common/get-all-pages'
import getSiteInfo from '@framework/common/get-site-info'


import s from './Search.module.scss'

import rangeMap from '@lib/range-map'

// TODO (bc) : Remove this. This should come from the API
import getSlug from '@lib/get-slug'

// TODO (bc) : Remove or standarize this.
const SORT = Object.entries({
    'latest-desc': 'Latest arrivals',
    'trending-desc': 'Trending',
    'price-asc': 'Price: Low to high',
    'price-desc': 'Price: High to low',
})

import {
    filterQuery,
    getCategoryPath,
    getDesignerPath,
    useSearchMeta,
} from '@lib/search'

import { Product } from '@commerce/types'
import { ShopifyConfig } from '@framework'



const getCollections = async (config: ShopifyConfig): Promise<Object[]> => {
    const gqlQuery = /* GraphQL */`
    query{collections(first: 250) {
        edges {
          node {
            id
            title
            handle
          }
        }
      }
    }`

    console.log(gqlQuery)
    const { data } = await config.fetch(gqlQuery, { variables: {} })
    const mutatedData = data.collections?.edges?.map(({ node: { id, title, handle } }) => {

        //const { node } = edge
        //const { id, title, handle } = node
        if (!id || !title || !handle) return null



        return Object.freeze({
            entityId: id,
            name: title,
            handle: handle,
            path: `/${handle}`
        })
    }) ?? []

    const cleanedData = mutatedData.filter(item => !!item)

    return cleanedData ?? Object.freeze({
        entityId: 'crap', name: 'crap', handle: 'crap', path: `${'crap'}`
    })
}

const getAllTypesInCollection = async (config: ShopifyConfig, collection: Object) => {
    const gqlQuery = `
        query {
            collectionByHandle(handle: "${collection.handle}") {
                products(first: 250) {
                    edges {
                        node {
                            id
                            productType
                        }
                    }
                }
            }
        }
            `
    const { data } = await config.fetch(gqlQuery, { variables: {} })
    const mutatedData = data.collectionByHandle?.products?.edges?.map(({ node: { id, productType } }) => {
        //const { node } = edge
        //const { id, productType } = node
        return productType
    }) ?? []

    const cleanedData = mutatedData.filter(item => !!item)

    const uniqueProductTypes = [...(new Set(cleanedData))]

    return uniqueProductTypes
}

const getCollectionsAndTypes = async (config: ShopifyConfig): Promise<Object[]> => {
    const collections = await getCollections(config)

    const collectionsAndTypes = await Promise.all(collections.map(async (collection) => {
        const typesInCollection = await getAllTypesInCollection(config, collection)

        return Object.freeze({
            collection: collection,
            types: typesInCollection
        })
    }))

    return collectionsAndTypes
}


export async function getStaticProps({
    preview,
    locale
}: GetStaticPropsContext) {
    const config = getConfig({ locale })
    const { pages } = await getAllPages({ config, preview })
    const { categories, brands } = await getSiteInfo({ config, preview })

    const collectionsAndTypes = await getCollectionsAndTypes(config)

    return { props: { collectionsAndTypes, pages, categories, brands } }
}

////////////////////////

export default function Search({ collectionsAndTypes, pages, categories, brands }: InferGetStaticPropsType<typeof getStaticProps>) {
    const [activeFilter, setActiveFilter] = useState('')
    const [toggleFilter, setToggleFilter] = useState(false)

    const router = useRouter()
    const { asPath } = router
    const { q, sort } = router.query
    // `q` can be included but because categories and designers can't be searched
    // in the same way of products, it's better to ignore the search input if one
    // of those is selected
    const query = filterQuery({ sort })

    //TODO: 
    const { pathname, category, brand } = useSearchMeta(asPath)

    const activeCategory = categories.find((cat) => getSlug(cat.path) === category)

    const activeBrand = brands.find(
        (b) => getSlug(b.node.path) === `brands/${brand}`
    )?.node

    const { data } = useSearch({
        search: typeof q === 'string' ? q : '',
        // TODO: Shopify - Fix this type
        categoryId: activeCategory?.entityId as any,
        // TODO: Shopify - Fix this type
        /* brandId: (activeBrand as any)?.entityId, */
        sort: typeof sort === 'string' ? sort : '',
    })

    const handleClick = (event: any, filter: string) => {
        if (filter !== activeFilter) {
            setToggleFilter(true)
        } else {
            setToggleFilter(!toggleFilter)
        }
        setActiveFilter(filter)
    }

    const Collection = ({ collection, types }) => {

        return (
            <section key={collection.name}>
                <h3 className={cn(s.filterSectionTitle, s.filterLink)}>
                    <Link href={{ pathname: getCategoryPath(collection.path, brand), query }}>
                        <a
                            onClick={(e) => handleClick(e, 'categories')}
                        >
                            {collection.name}
                        </a>
                    </Link>
                </h3>
                <hr className={s.filterSectionRule} />
                <ul>
                    {
                        types.map(type => (
                            <li key={`${collection.name}${type}`}>
                                <a className={cn(s.filterLink, s.filterLink__type)}>{type}</a>
                            </li>
                        ))
                    }
                </ul>
            </section>
        )
    }

    const FiltersList = ({ collectionsAndTypes }) => {
        return (
            <section className={s.filters}>
                <h1>Filters</h1>
                {
                    collectionsAndTypes.map(item => (
                        <Collection key={item.collection.path} collection={item.collection} types={item.types} />
                    ))
                }
            </section>
        )
    }

    return (
        <ContentSection>
            <div className={s.grid}>
                {/* <div className={s.sort}>

                </div> */}
                <FiltersList key={'filterlist'} collectionsAndTypes={collectionsAndTypes} />
                <div key={'products'} className={s.products}>
                    {(q || activeCategory) && (
                        data ? (
                            <>
                                <span
                                    className={cn('animated', s.resultInfo, {
                                        fadeIn: data.found,
                                        hidden: !data.found,
                                    })}
                                >
                                    Showing {data.products.length} results{' '}
                                    {q && (
                                        <>
                                            for "<strong>{q}</strong>"
                                        </>
                                    )}
                                </span>
                                <span
                                    className={cn('animated', {
                                        fadeIn: !data.found,
                                        hidden: data.found,
                                    })}
                                >
                                    {q ? (
                                        <>
                                            There are no products that match "<strong>{q}</strong>"
                                        </>
                                    ) : (
                                        <>
                                            There are no products that match the selected criteria
                                        </>
                                    )}
                                </span>
                            </>
                        ) : q ? (
                            <>
                                Searching for: "<strong>{q}</strong>"
                                </>
                        ) : (
                            //TODO: add searching animation
                            <>Searching...</>
                        )
                    )}
                    {data ? (
                        <ProductGrid className={s.productgrid}>
                            {data.products.map((product: Product) => (
                                <>
                                    <ProductCard product={product} key={product.name} />
                                </>
                            ))}
                        </ProductGrid>
                    ) : (
                        <Grid layout="normal">
                            {rangeMap(12, (i) => (
                                <Skeleton
                                    key={i}
                                    className="w-full animated fadeIn"
                                    height={325}
                                />
                            ))}
                        </Grid>
                    )}
                </div>
            </div>

        </ContentSection >
    )
}

Search.Layout = Layout