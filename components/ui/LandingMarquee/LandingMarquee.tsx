import cn from 'classnames'
import s from './LandingMarquee.module.css'
import { FC, ReactNode, Component } from 'react'
import Ticker from 'react-ticker'
import { url } from 'inspector'

interface Props {
  children?: ReactNode[] | Component[] | any[]
}

const LandingMarquee = (items: any[]) => {
  return <Marquee>{items}</Marquee>
}

const Marquee: FC<Props> = ({ children }) => {
  return (
    <div className={s.container}>
      <Ticker offset={80}>
        {() => <div className={s.marqueeContainer}>{children}</div>}
      </Ticker>
    </div>
  )
}

export default LandingMarquee
