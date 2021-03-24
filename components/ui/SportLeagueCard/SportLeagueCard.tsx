import { FC } from 'react'
import cn from 'classnames'
import Link from 'next/link'
import type { Product } from '@commerce/types'
import s from './SportLeagueCard.module.css'
import Image, { ImageProps } from 'next/image'
import WishlistButton from '@components/wishlist/WishlistButton'

interface Props {
  key: string
  name: string
  imageUrl: string
  pageLink: string
}

const placeholderImg = '/product-img-placeholder.svg'

// TODO: update to use 'link' instead of 'a'
const SportLeagueCard: FC<Props> = ({ key, name, imageUrl, pageLink }) => (
  <a href={pageLink} className={s.container} key={key}>
    <div className={s.imageWrapper}>
      <img src={imageUrl} alt={`Image of ${name} leagues`} />
    </div>
    {/* 
    <p>{name}</p> */}
  </a>
)

export default SportLeagueCard
