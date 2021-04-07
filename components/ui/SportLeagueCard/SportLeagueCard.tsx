import { FC } from 'react'
import cn from 'classnames'
import Link from 'next/link'
import type { Product } from '@commerce/types'
import s from './SportLeagueCard.module.scss'
import Image, { ImageProps } from 'next/image'
import WishlistButton from '@components/wishlist/WishlistButton'

interface Props {
  name: string
  imageUrl: string
  pageLink: string
}

const placeholderImg = '/product-img-placeholder.svg'

// TODO: update to use 'link' instead of 'a'
const SportLeagueCard: FC<Props> = ({ name, imageUrl, pageLink }) => (
  <a href={pageLink} className={s.container}>
    <div className={s.imageWrapper}>
      <img src={imageUrl} alt={`Image of ${name} leagues`} />
    </div>
    <h1>{name}</h1>
    {/* 
    <p>{name}</p> */}
  </a>
)

export default SportLeagueCard
