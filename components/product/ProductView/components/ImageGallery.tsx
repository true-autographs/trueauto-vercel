import React from 'react'
import type { Product } from '@commerce/types'
import Image, { ImageProps } from 'next/image'
import { Breakpoints } from '@components/ui'
import SimpleReactLightbox, { SRLWrapper } from 'simple-react-lightbox'
//import { FullImage } from '@components/ui'
import s from './../ProductView.module.scss'

const placeholderImg: string = '/product-img-placeholder.svg'

const sourceSet: string = `(min-width: ${Breakpoints.tablet}px) 50vw, (min-width: ${Breakpoints.desktopXl}px) 48vw, 100vw`

const ImageGallery = ({ product }: { product: Product }) => {
  //console.log(product)

  return (
    <SimpleReactLightbox>
      <SRLWrapper options={{ settings: { hideControlsAfter: 1000 } }}>
        <figure className={s.imagegallery} style={{ cursor: 'pointer' }}>
          {product.images?.map((image) => {
            const altText =
              image.alt || image.altText || product.name || 'product image'

            const imageSrc = image.url || placeholderImg

            return (
              <Image
                key={image.url}
                layout="responsive"
                src={imageSrc}
                alt={altText}
                width={image.width}
                height={image.height}
                sizes={sourceSet}
              />
            )
          })}
        </figure>
      </SRLWrapper>
    </SimpleReactLightbox>
  )
}

export default ImageGallery
