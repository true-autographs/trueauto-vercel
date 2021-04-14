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
      <hr className={s.rule} />
    </div>
  )
}

export default SectionTitle
