import React from 'react'
import cn from 'classnames'

import s from './ContentSection.module.scss'

interface Props {
  className?: string
  children?: any
  noPadVertical?: boolean
  el?: string
}

const ContentSection = ({
  className = '',
  children,
  noPadVertical = false,
  el = 'div',
}: Props) => {
  let Component: React.ComponentType<
    React.HTMLAttributes<HTMLDivElement>
  > = el as any

  const noPaddingClass = s.nopadvertical

  const rootClassname = cn(s.contentsection, {
    [className]: className,
    [noPaddingClass]: noPadVertical,
  })

  s.contentsection +
    (className ? className : '') +
    (noPadVertical ? ` ${s['contentsection--nopadvertical']}` : '')

  return <Component className={rootClassname}>{children}</Component>
}

export default ContentSection
