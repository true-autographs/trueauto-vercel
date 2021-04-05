import React from 'react'
import Image, { ImageProps } from 'next/image'
import s from './FullImage.module.scss'
import products from '@framework/api/catalog/products'

const sizedImageHeight = (width: number, height: number, newWidth: number) =>
  (height * newWidth) / width

interface Props {
  targetWidth: number
  altText?: string
  url: string
  width: number
  height: number
  className?: string
}

const FullImage = ({
  targetWidth,
  altText,
  url,
  width,
  height,
  className = '',
}: Props) => {
  const altDescription: string = altText || 'product image'

  const sizedHeight: number = sizedImageHeight(width, height, targetWidth)

  return (
    <Image
      alt={altDescription}
      className={className}
      src={url}
      height={sizedHeight}
      width={targetWidth}
      quality="85"
      layout="responsive"
    />
  )
}

export default FullImage
