import cn from 'classnames'
import s from './Marquee.module.scss'
import { FC, ReactNode, Component, useState } from 'react'
import Ticker from 'react-ticker'

interface Props {
  className?: string
  children?: ReactNode[] | Component[] | any[]
}

const Marquee: FC<Props> = ({ className = '', children }) => {
  const rootClassName = cn(s.root, className)
  const [shouldScroll, setShouldScroll] = useState(true)

  return (
    <div className={rootClassName}>
      <Ticker speed={5} mode={'chain'} move={shouldScroll}>
        {() => (
          <div
            className={s.hometicker__contents}
            onMouseEnter={() => setShouldScroll(false)}
            onMouseLeave={() => setShouldScroll(true)}
          >
            {children}
          </div>
        )}
      </Ticker>
    </div>
  )
}

export default Marquee
