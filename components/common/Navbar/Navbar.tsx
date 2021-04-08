import { FC, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Logo, Container, ContentSection } from '@components/ui'
import { Searchbar, UserNav } from '@components/common'
import cn from 'classnames'

import AnnouncementBar from './Components/AnnouncementBar'
import NavbarRoot from './NavbarRoot'
import s from './Navbar.module.scss'

/* const LowerAlert = () => {
  const isHome = useRouter().pathname === '/'
  const [isOpen, setIsOpen] = useState(true)

  return isOpen && isHome ? (
    <div style={{ padding: '36px', backgroundColor: 'rgba(0,0,0,0.1)' }}>
      <p style={{ textAlign: 'center' }}>sample text</p>
      <p style={{ textAlign: 'center' }}>line 2</p>
      <button
        onClick={() => {
          setIsOpen(false)
        }}
      >
        close
      </button>
    </div>
  ) : (
    <></>
  )
} */

const NavLink = ({ url, title }: { url: string; title: string }) => {
  const currentLink = useRouter().pathname
  const isCurrent = currentLink === url
  const classes = cn([s.navlink], { [s.navlinkactive]: isCurrent })

  return (
    <Link href={url} key={title}>
      <a className={classes}>{title}</a>
    </Link>
  )
}

const NavElement = () => {
  return (
    <ContentSection noPadVertical={true}>
      <div
        className="relative flex flex-row justify-between py-4 align-center md:py-6"
        style={{ paddingTop: '.75rem', paddingBottom: '.75rem' }}
      >
        <div className="flex items-center flex-1">
          <Link href="/">
            <a className={s.logo} aria-label="Logo">
              <Logo />
            </a>
          </Link>
          <nav className="hidden ml-6 space-x-4 lg:block">
            <NavLink url={'/products'} title={'products'} />
            <NavLink url={'/signing events'} title={'signing events'} />
            <NavLink url={'/news'} title={'news'} />
            <NavLink url={'/search'} title={'search'} />
          </nav>
        </div>

        <div className="justify-center flex-1 hidden lg:flex">
          {/* <Searchbar /> */}
        </div>

        <div className="flex justify-end flex-1 space-x-8">
          <UserNav />
        </div>
      </div>

      {/* <div className="flex pb-4 lg:px-6 lg:hidden">
      <Searchbar id="mobile-search" />
    </div> */}
    </ContentSection>
  )
}

const Navbar: FC = () => (
  <NavbarRoot>
    <AnnouncementBar showInitially={true} />
    <NavElement />
  </NavbarRoot>
)

export default Navbar
