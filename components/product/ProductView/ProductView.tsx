import cn from 'classnames'
import Image from 'next/image'
import { NextSeo } from 'next-seo'
import React, { FC, useState } from 'react'
import s from './ProductView.module.scss'

import ImageGallery from './components/ImageGallery'

import { Swatch, ProductSlider } from '@components/product'
import {
  ContentSection,
  ContentGrid,
  Button,
  Container,
  Text,
  useUI,
  ProductSection
} from '@components/ui'

import type { Product } from '@commerce/types'
import usePrice from '@framework/product/use-price'
import { useAddItem } from '@framework/cart'

import { getVariant, SelectedOptions } from '../helpers'
import WishlistButton from '@components/wishlist/WishlistButton'
import products from '@framework/api/catalog/products'

////////////////////////////////

////////////////////////////////

/* interface Props {
  className?: string
  children?: any
  product: Product
} */
const RelatedProducts = ({ products }: Product[]) => {
  const relatedProducts = products.products
  return (<ProductSection
    key={'related products'}
    products={relatedProducts}
    alignBottom={true}
    title={'Related Products'}
    pageUrl={`/search`}
    hideInfo={false}
    buttonText={'View All Products'}
  />)
}

const ProductView = ({ product, relatedProducts }: { product: Product, relatedProducts: Product[] }) => {
  if (!product.price.value) {
    console.log('------------- failed ----------')
    console.log(product.name)
  }

  const addItem = useAddItem()
  const { price } = usePrice({
    amount: product.price.value,
    baseAmount: product.price.retailPrice,
    currencyCode: product.price.currencyCode!,
  })

  const { openSidebar } = useUI()

  const [loading, setLoading] = useState(false)
  const [choices, setChoices] = useState<SelectedOptions>({
    size: null,
    color: null,
  })
  const [cartError, setCartError] = useState(false)

  const hasVariants = product.variants && product.variants.length > 1

  const variant = hasVariants ? getVariant(product, choices) : product.variants[0]



  const addToCart = async () => {
    setLoading(true)
    try {
      await addItem({
        productId: String(product.id),
        variantId: String(variant ? variant.id : product.variants[0].id),
      })
      openSidebar()
      setLoading(false)
      setCartError(false)
    } catch (err) {
      setLoading(false)
      setCartError(true)
    }
  }

  return (
    //Replace Container with custom wrapper
    <>
      <NextSeo
        title={product.name}
        description={product.description}
        openGraph={{
          type: 'website',
          title: product.name,
          description: product.description,
          images: [
            {
              url: product.images[0]?.url!,
              width: 800,
              height: 600,
              alt: product.name,
            },
          ],
        }}
      />
      <ContentSection noPadVertical={false} el="section">
        <ContentGrid>
          <ImageGallery product={product} />
          <div className={s.info}>
            {/* <h1>{product.name}</h1> */}
            <section>
              {product.options?.map((opt) => (
                <div className="pb-4" key={opt.displayName}>
                  <div className={s.headingwrapper}>
                    <h1 className={s.name}>{product.name}</h1>
                    {/* TODO: add collection to breadcrumbs */}
                    <h2 className={s.collectionname}>{`${product.productType}`}</h2>
                  </div>
                  <p className={s.productprice}>{price}</p>

                  {// TODO: Update swatches to show item description.
                    hasVariants ? (

                      <div className={s.swatches}>
                        {opt.values.map((v, i: number) => {
                          const active = (choices as any)[
                            opt.displayName.toLowerCase()
                          ]

                          return (
                            <Swatch
                              key={`${opt.id}-${i}`}
                              active={v.label.toLowerCase() === active}
                              variant={opt.displayName}
                              color={v.hexColors ? v.hexColors[0] : ''}
                              label={v.label}
                              onClick={() => {
                                setChoices((choices) => {
                                  return {
                                    ...choices,
                                    [opt.displayName.toLowerCase()]: v.label.toLowerCase(),
                                  }
                                })
                              }}
                            />
                          )
                        })}
                      </div>
                    ) : ''}
                </div>
              ))}

              <div>
                {/* TODO: Fix variant issue */}
                <Button
                  aria-label="Add to Cart"
                  type="button"
                  className={s.button}
                  onClick={addToCart}
                  loading={loading}
                /* disabled={!variant && product.options.length > 0} */
                >
                  Add to Cart
                </Button>
              </div>

              <hr className={s.descriptionrule} />

              <div className={s.descriptionWrapper}>
                {/* TODO: Use descriptionHTML instead */}
                <Text className={s.description} html={product.description} />
              </div>
            </section>
            {/* TODO: add links for tags */}
            {/* {
              
              product.tags
                ? product.tags.map((tag) => <button>{tag}</button>)
                : ''
            } */}


            {/* {process.env.COMMERCE_WISHLIST_ENABLED && (
              <WishlistButton
                className={s.wishlistButton}
                productId={product.id}
                variant={product.variants[0]! as any}
              />
            )} */}
            {/* <h2>{product.description}</h2>
            <h3>{product.price.value}</h3>
            <h4>{product.price.currencyCode}</h4> */}
          </div>
          {/* <div className={s.details}>
            <h2>Details</h2>
          </div> */}
        </ContentGrid>
      </ContentSection>
      <RelatedProducts products={relatedProducts} />
      {/* <ContentSection el="section">
        <h1>Related Projects</h1>
        <article>item1</article>
        <article>item2</article>
      </ContentSection> */}
    </>
  )
}

/* const ProductView: FC<Props> = ({ product }) => {
  const addItem = useAddItem()
  const { price } = usePrice({
    amount: product.price.value,
    baseAmount: product.price.retailPrice,
    currencyCode: product.price.currencyCode!,
  })
  const { openSidebar } = useUI()
  const [loading, setLoading] = useState(false)
  const [choices, setChoices] = useState<SelectedOptions>({
    size: null,
    color: null,
  })

  // Select the correct variant based on choices
  const variant = getVariant(product, choices)
  console.log('variant:')
  console.log(variant)
  const addToCart = async () => {
    setLoading(true)
    try {
      await addItem({
        productId: String(product.id),
        variantId: String(variant ? variant.id : product.variants[0].id),
      })
      openSidebar()
      setLoading(false)
    } catch (err) {
      setLoading(false)
    }
  }

  console.log(product)

  return (
    <Container className="max-w-none w-full" clean>
      <NextSeo
        title={product.name}
        description={product.description}
        openGraph={{
          type: 'website',
          title: product.name,
          description: product.description,
          images: [
            {
              url: product.images[0]?.url!,
              width: 800,
              height: 600,
              alt: product.name,
            },
          ],
        }}
      />
      <div className={cn(s.root, 'fit')}>
        <div className={cn(s.productDisplay, 'fit')}>
          <div className={s.nameBox}>
            <h1 className={s.name}>{product.name}</h1>
            <div className={s.price}>
              {product.price.value}
              {` `}
              {product.price?.currencyCode}
            </div>
          </div>

          <div className={s.sliderContainer}>
            <ProductSlider key={product.id}>
              {product.images.map((image, i) => (
                <div key={image.url} className={s.imageContainer}>
                  <Image
                    className={s.img}
                    src={image.url!}
                    alt={image.alt || 'Product Image'}
                    width={1050}
                    height={1050}
                    priority={i === 0}
                    quality="85"
                  />
                </div>
              ))}
            </ProductSlider>
          </div>
        </div>
        <div className={s.sidebar}>
          <section>
            {product.options?.map((opt) => (
              <div className="pb-4" key={opt.displayName}>
                <h2
                  className="uppercase font-medium text-4xl"
                  style={{
                    fontWeight: 600,
                    lineHeight: '1.4',
                    letterSpacing: '0.03em',
                  }}
                >
                  {product.name}
                </h2>
                <h2
                  className="uppercase font-medium"
                  style={{ fontSize: '2rem', paddingTop: '2rem' }}
                >
                  ${product.price.value}
                </h2>
                <div className="flex flex-row py-4">
                  {opt.values.map((v, i: number) => {
                    const active = (choices as any)[
                      opt.displayName.toLowerCase()
                    ]

                    return (
                      <Swatch
                        key={`${opt.id}-${i}`}
                        active={v.label.toLowerCase() === active}
                        variant={opt.displayName}
                        color={v.hexColors ? v.hexColors[0] : ''}
                        label={v.label}
                        onClick={() => {
                          setChoices((choices) => {
                            return {
                              ...choices,
                              [opt.displayName.toLowerCase()]: v.label.toLowerCase(),
                            }
                          })
                        }}
                      />
                    )
                  })}
                </div>
              </div>
            ))}

            <hr
              style={{
                borderTop: '4px solid #E87722',
                paddingBottom: '1rem',
                width: '4rem',
              }}
            />

            <div className="pb-14 break-words w-full max-w-xl">
              <Text html={product.description} />
            </div>
          </section>
          {
            //TODO: add links fo tags
            product.tags
              ? product.tags.map((tag) => <button>{tag}</button>)
              : ''
          }
          <div>
            <Button
              aria-label="Add to Cart"
              type="button"
              className={s.button}
              onClick={addToCart}
              loading={loading}
              disabled={!variant && product.options.length > 0}
            >
              Add to Cart
            </Button>
          </div>
        </div>
        {process.env.COMMERCE_WISHLIST_ENABLED && (
          <WishlistButton
            className={s.wishlistButton}
            productId={product.id}
            variant={product.variants[0]! as any}
          />
        )}
      </div>
    </Container>
  )
} */

export default ProductView
