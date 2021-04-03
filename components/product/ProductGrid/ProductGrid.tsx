import React, { ReactNode, Component } from 'react'
import s from './ProductGrid.module.scss'
import Masonry from 'react-masonry-css'

interface Props {
  children?: ReactNode[] | Component[] | any[]
}
const ProductGrid = (props: Props) => {
  const children = props.children || ''
  return (
    <Masonry
      className={s.productgrid}
      columnClassName={s.productgrid__column}
      breakpointCols={3}
    >
      {children}
    </Masonry>
  )
}

export default ProductGrid
