import React, { FC } from 'react'
import { Container } from '@components/ui'
import { RightArrow } from '@components/icons'
import s from './HomeHero.module.css'
import Link from 'next/link'

interface Props {
  className?: string
  headline: string
  description: string
}

const products = {
  title: 'products',
  pageLink: 'search/',
  imageUrl: 'ta_sample_bw_on_knees.jpg',
}
const events = {
  title: 'events',
  pageLink: 'search/',
  imageUrl:
    'https://images.unsplash.com/photo-1612151387614-0d29a04ff5f3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=975&q=80',
}

const HomeHero = () => {
  return (
    <section className={s.container}>
      <a href={products.pageLink} className={s.linkWrapper}>
        <div className={s.section}>
          <img
            className={s.backgroundImage}
            src={products.imageUrl}
            alt="product intro image"
          />
        </div>
        <div className={s.textBox}>
          <p>{products.title}</p>
        </div>
      </a>
      <a href={events.pageLink} className={s.linkWrapper}>
        <div className={s.section}>
          <img
            className={s.backgroundImage}
            src={events.imageUrl}
            alt="events intro image"
          />
        </div>
        <div className={s.textBox}>
          <p>{events.title}</p>
        </div>
      </a>
    </section>
  )
}

export default HomeHero
