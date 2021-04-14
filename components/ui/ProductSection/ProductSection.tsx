import React, { useEffect, useState } from 'react'
import cn from 'classnames'
import Image from 'next/image'
import Link from 'next/Link'
import { Breakpoints } from '@components/ui'
import { ProductCard } from '@components/product'
import type { Product } from '@commerce/types'
import { ContentSection, SectionTitle, ButtonRolling } from '@components/ui'

import s from './ProductSection.module.scss'

/* interface CardProps {
  showInfo?: boolean
  product: Product
}

const ProductCard = ({ product, showInfo = true }: CardProps) => {
  const placeholderImg: string = '/product-img-placeholder.svg'

  const imageUrl = product.images?.[0]?.url || placeholderImg
  const imageWidth = product.images?.[0]?.width || 500
  const imageHeight = product.images?.[0]?.height || 500

  const altText =
    product.images?.[0]?.alt ||
    product.images?.[0]?.altText ||
    product.name ||
    'event image'

  const sourceSet: string = `(min-width: ${Breakpoints.tablet}px) 50vw, (min-width: ${Breakpoints.desktopXl}px) 33vw, 100vw`

  return (
    <article className={s.eventcard}>
      <Link href={`/product/${product.slug}`}>
        <a>
          <Image
            className={s.eventcardimage}
            key={imageUrl}
            layout="responsive"
            src={imageUrl}
            alt={altText}
            width={imageWidth}
            height={imageHeight}
            sizes={sourceSet}
          />
          {showInfo ? (
            <div className={s.info}>
              <h1>{product.name}</h1>
              <span>{product.categories}</span>
            </div>
          ) : (
            ''
          )}
        </a>
      </Link>
    </article>
  )
} */

interface Products {
  products: Product[]
  alignBottom?: boolean
  hideInfo?: boolean
  pageUrl?: string
  title: string
  buttonText?: string
}

const ProductSection = ({
  products,
  alignBottom = false,
  hideInfo = false,
  pageUrl,
  title,
  buttonText
}: Products) => {
  return (
    <ContentSection el={'section'} className={s.contentsection}>
      <SectionTitle title={title} sectionLink={pageUrl} />
      <div className={alignBottom ? s.productGrid__alignbottom : s.productGrid}>
        {products.map((product, index) => (
          <ProductCard
            key={product.slug}
            product={product}
            hideInfo={hideInfo}
          />
        ))}
      </div>
      {buttonText && (
        <ButtonRolling href={pageUrl} text={buttonText} />
      )}
    </ContentSection>
  )
}

export default ProductSection
