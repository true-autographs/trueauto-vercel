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

const SportLeagueCard: FC<Props> = ({ name, imageUrl, pageLink }) => (
  <Link href={pageLink}>
    <a className={s.container}>
      <div className={s.imageWrapper}>
        <img src={imageUrl} alt={`Image of ${name} leagues`} />
      </div>
      <div className={s.overlay}>
        <h1 className={s.leaguename}>{name}</h1>
      </div>
    </a>
  </Link>
)

export default SportLeagueCard
