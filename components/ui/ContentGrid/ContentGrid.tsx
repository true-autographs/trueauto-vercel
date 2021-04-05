import cn from 'classnames'
import React, { Component, ReactNode } from 'react'
import s from './ContentGrid.module.scss'

const columnClassEvaluater = (columns: number) =>
  Object({
    [s['contentgrid--col1']]: columns === 1,
    [s['contentgrid--col2']]: columns === 2,
    [s['contentgrid--col3']]: columns === 3,
    [s['contentgrid--col4']]: columns === 4,
    [s['contentgrid--col5']]: columns === 5,
    [s['contentgrid--col6']]: columns === 6,
  })

const getGridClasses = (columns: number) =>
  cn(s.contentgrid, columnClassEvaluater(columns))

interface Props {
  className?: string
  children?: ReactNode[] | Component[] | any[]
  columns?: 1 | 2 | 3 | 4 | 5 | 6
}

const ContentGrid = ({ className, children, columns = 2 }: Props) => {
  //const gridClasses = getGridClasses(columns)

  const gridClasses = getGridClasses(columns)

  return <div className={gridClasses}>{children}</div>
}

export default ContentGrid
