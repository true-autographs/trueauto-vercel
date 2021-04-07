import React, { ReactNode, Component } from 'react'
import s from './ProductGrid.module.scss'
import Masonry from 'react-masonry-css'

interface Props {
  children?: ReactNode[] | Component[] | any[]
}
const ProductGrid = (props: Props) => {
  const children = props.children || ''
  return (
    /* <Masonry
      className={s.productgrid}
      columnClassName={s.productgrid__column}
      breakpointCols={3}
    >
      
    </Masonry> */
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        width: '100%',
        columnGap: '36px',
        rowGap: '36px',
        alignItems: 'end',
      }}
    >
      {children}
    </div>
  )
}

export default ProductGrid
