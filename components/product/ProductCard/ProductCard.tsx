import React, { FC } from 'react'
import cn from 'classnames'
import Link from 'next/link'
import type { Product } from '@commerce/types'
import s from './ProductCard.module.scss'
import Image, { ImageProps } from 'next/image'
import WishlistButton from '@components/wishlist/WishlistButton'

import getSymbolFromCurrency from 'currency-symbol-map'
import { titleCase } from 'title-case'

/*  */
/* const checkIfKeysExist = (keys, hostObject) =>
  keys.forEach((key) => {
    if (hostObject[key]) {
      console.log(`Exists: '${key}' exists in host object.`)
    } else {
      console.log(`Missing: '${key}' is not a key in host object.`)
    }
  }) */

const convertToCurrencySymbol = (currencyCode: string) =>
  getSymbolFromCurrency(currencyCode)

const buildPrice = (price: {
  currencyCode: string | undefined
  value: number
}) => {
  const { currencyCode, value } = price
  const symbol = currencyCode ? convertToCurrencySymbol(currencyCode) : ''

  return `${symbol}${value}`
}

const prepareTitle = (title: string | undefined) =>
  title ? titleCase(title.toLowerCase()) : ''

const sizedImageHeight = (
  image: { width: number; height: number },
  newWidth: number
) => (image.height * newWidth) / image.width

/*  */

interface CardProps {
  /* className?: string */
  product: Product
  variant?: 'slim' | 'simple'
  imgProps?: Omit<ImageProps, 'src'>
}

const placeholderImg = '/product-img-placeholder.svg'

const ProductCard = (cardProps: CardProps) => {
  const { product } = cardProps
  const priceInfo = buildPrice(product.price)

  const cardTitle = prepareTitle(product.name)

  const cardImageWidth = 320

  return (
    <Link href={`product/${product.slug}`}>
      <a className={s.linkwrapper} key={product.path}>
        <article className={s.card}>
          {product?.images && (
            <Image
              className={s.cardImage}
              layout={'responsive'}
              width={cardImageWidth}
              height={sizedImageHeight(product.images[0], cardImageWidth)}
              alt={product.images[0].altText || product.name || 'product image'}
              src={product.images?.[0]?.url || placeholderImg}
            />
          )}

          <div
            className={s.titleblock}
            style={{ display: 'flex', flexDirection: 'column-reverse' }}
          >
            <h1 className={s.title}>{cardTitle}</h1>
            <h2 className={s.type}>{product.productType}</h2>
          </div>
          <p className={s.price}>{priceInfo}</p>
        </article>
      </a>
    </Link>
  )
}

/* const ProductCard: FC<Props> = ({
  className,
  product,
  variant,
  imgProps,
  ...props
}) => (
  <Link href={`/product/${product.slug}`} {...props}>
    <a className={cn(s.root, { [s.simple]: variant === 'simple' }, className)}>
      {variant === 'slim' ? (
        <div className="relative overflow-hidden box-border">
          <div className="absolute inset-0 flex items-center justify-end mr-8 z-20">
            <span className="bg-black text-white inline-block p-3 font-bold text-xl break-words">
              {product.name}
            </span>
          </div>
          {product?.images && (
            <Image
              quality="85"
              src={product.images[0].url || placeholderImg}
              alt={product.name || 'Product Image'}
              height={320}
              width={320}
              layout="fixed"
              {...imgProps}
            />
          )}
        </div>
      ) : (
        <>
          <div className={s.squareBg} />
          <div className="flex flex-row justify-between box-border w-full z-20 absolute">
            <div className="absolute top-0 left-0 pr-16 max-w-full">
              <h3 className={s.productTitle}>
                <span>Cat: {product.categories}</span>
              </h3>
              <h3 className={s.productTitle}>
                <span>Pub: {product.createdAt}</span>
              </h3>
              <h3 className={s.productTitle}>
                <span>
                  Tags: {product.tags ? product.tags.join(' ') : 'nope'}
                </span>
              </h3>
              <h3 className={s.productTitle}>
                <span>Type: {product.productType}</span>
              </h3>
              <h3 className={s.productTitle}>
                <span>Coll: {product.collections?.first}</span>
              </h3>
              <h3 className={s.productTitle}>
                <span>id: {product.id}</span>
              </h3>
              <h3 className={s.productTitle}>
                <span>avail: {product.availableForSale}</span>
              </h3>
              <h3 className={s.productTitle}>
                <span>{product.name}</span>
              </h3>
              <span className={s.productPrice}>
                {product.price.value}
                &nbsp;
                {product.price.currencyCode}
              </span>
            </div>
            {process.env.COMMERCE_WISHLIST_ENABLED && (
              <WishlistButton
                className={s.wishlistButton}
                productId={product.id}
                variant={product.variants[0] as any}
              />
            )}
          </div>
          <div className={s.imageContainer}>
            {product?.images && (
              <Image
                alt={product.name || 'Product Image'}
                className={s.productImage}
                src={product.images[0].url || placeholderImg}
                height={540}
                width={540}
                quality="85"
                layout="responsive"
                {...imgProps}
              />
            )}
          </div>
        </>
      )}
    </a>
  </Link>
) */

export default ProductCard
