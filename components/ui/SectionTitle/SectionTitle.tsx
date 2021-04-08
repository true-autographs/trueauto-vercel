import React from 'react'
import s from './SectionTitle.module.scss'

interface Props {
  title: string
  sectionLink?: string
}
const SectionTitle = ({ title, sectionLink }: Props) => {
  return (
    <div className={s.titlewrapper}>
      <h1 className={s.title}>{title}</h1>
      {sectionLink ? (
        <a className={s.link} href={sectionLink}>
          View All
        </a>
      ) : (
        ''
      )}
    </div>
  )
}

export default SectionTitle
