import React, { ReactNode, Component } from 'react'
import s from './ProductGrid.module.scss'
import Masonry from 'react-masonry-css'
import cn from 'classnames'

interface Props {
  children?: ReactNode[] | Component[] | any[]
  className?: string
}

const ProductGrid = (props: Props) => {
  const children = props.children || ''
  const className = props.className || ' '
  return (
    /* <Masonry
      className={s.productgrid}
      columnClassName={s.productgrid__column}
      breakpointCols={3}
    >
      
    </Masonry> */
    <div
      className={cn(s.gridwrapper, className)}
    >
      {children}
    </div>
  )
}

export default ProductGrid
