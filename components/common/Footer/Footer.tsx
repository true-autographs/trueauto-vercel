import { FC } from 'react'
import cn from 'classnames'
import Link from 'next/link'
import { useRouter } from 'next/router'
import type { Page } from '@framework/common/get-all-pages'
import getSlug from '@lib/get-slug'
import { Github, Vercel } from '@components/icons'
import { Logo, Container, ContentSection } from '@components/ui'
import { I18nWidget } from '@components/common'
import s from './Footer.module.css'

import m from './Footer.module.scss'

interface Props {
  className?: string
  children?: any
  pages?: Page[]
}

const LEGAL_PAGES = ['terms-of-use', 'shipping-returns', 'privacy-policy']

const Footer: FC<Props> = ({ className, pages }) => {
  const { sitePages, legalPages } = usePages(pages)
  const rootClassName = cn(className)

  return (
    <>
      <footer className={m.footer}>
        <ContentSection className={m.container}>
          <div className={m.footerContent}>
            <div className={m.innerFooterContent}>
              <img className={m.footerLogo} src={'/web_simple_blue.svg'} />
              <div className={m.footerLinksWrapper}>
                <ul>
                  <h1>Pages</h1>
                  <li>
                    <Link href={'/search'}>
                      <a>All Products</a>
                    </Link>
                  </li>
                  <li>
                    <Link href={'/'}>
                      <a>Signing Events</a>
                    </Link>
                  </li>
                  <li>
                    <Link href={'/'}>
                      <a>News</a>
                    </Link>
                  </li>
                </ul>
                <ul>
                  <h1>Resources</h1>
                  <li>
                    <Link href={'/authenticitySearch'}>
                      <a>Lookup Authenticity Code</a>
                    </Link>
                  </li>
                  <li>
                    <Link href={'/b2b'}>
                      <a>B2B</a>
                    </Link>
                  </li>
                  <li>
                    <Link href={'/agent'}>
                      <a>Agents</a>
                    </Link>
                  </li>
                </ul>
                <ul>
                  <h1>Legal</h1>
                  <li>
                    <Link href={'/search'}>
                      <a>Terms of Service</a>
                    </Link>
                  </li>
                  <li>
                    <Link href={'/'}>
                      <a>Privacy Policy</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </ContentSection>
      </footer>

      {/* <footer className={rootClassName}>
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 border-b border-accents-2 py-12 text-primary bg-primary transition-colors duration-150">
            <div className="col-span-1 lg:col-span-2">
              <Link href="/">
                <a className="flex flex-initial items-center font-bold md:mr-24">
                  <Logo />
                </a>
              </Link>
            </div>
            <div className="col-span-1 lg:col-span-2">
              <ul className="flex flex-initial flex-col md:flex-1">
                <li className="py-3 md:py-0 md:pb-4">
                  <Link href="/">
                    <a className="text-primary hover:text-accents-6 transition ease-in-out duration-150">
                      Home
                  </a>
                  </Link>
                </li>
                <li className="py-3 md:py-0 md:pb-4">
                  <Link href="/search">
                    <a className="text-primary hover:text-accents-6 transition ease-in-out duration-150">
                      All Memorabilia
                  </a>
                  </Link>
                </li>
                <li className="py-3 md:py-0 md:pb-4">
                  <Link href="/news">
                    <a className="text-primary hover:text-accents-6 transition ease-in-out duration-150">
                      News
                  </a>
                  </Link>
                </li>
                <li className="py-3 md:py-0 md:pb-4">
                  <Link href="/b2b">
                    <a className="text-primary hover:text-accents-6 transition ease-in-out duration-150">
                      B2B
                  </a>
                  </Link>
                </li>
                <li className="py-3 md:py-0 md:pb-4">
                  <Link href="/athletes">
                    <a className="text-primary hover:text-accents-6 transition ease-in-out duration-150">
                      Agents
                  </a>
                  </Link>
                </li>
                {sitePages.map((page) => (
                <li key={page.url} className="py-3 md:py-0 md:pb-4">
                  <Link href={page.url!}>
                    <a className="text-primary hover:text-accents-6 transition ease-in-out duration-150">
                      {page.name}
                    </a>
                  </Link>
                </li>
              ))}
              </ul>
            </div>
            <div className="col-span-1 lg:col-span-2">
              <ul className="flex flex-initial flex-col md:flex-1">
                {legalPages.map((page) => (
                  <li key={page.url} className="py-3 md:py-0 md:pb-4">
                    <Link href={page.url!}>
                      <a className="text-primary hover:text-accents-6 transition ease-in-out duration-150">
                        {page.name}
                      </a>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-span-1 lg:col-span-6 flex items-start lg:justify-end text-primary">
            <div className="flex space-x-6 items-center h-10">
              <I18nWidget />
            </div>
          </div>
          </div>
          <div className="py-12 flex flex-col md:flex-row justify-between items-center space-y-4">
          <div>
            <span>&copy; 2020 ACME, Inc. All rights reserved.</span>
          </div>
          <div className="flex items-center text-primary">
            <span className="text-primary">Crafted by</span>
            <a
              rel="noopener"
              href="/"
              aria-label="Home Link"
              target="_blank"
              className="text-primary"
            >
              <Vercel
                className="inline-block h-6 ml-4 text-primary"
                alt="Vercel.com Logo"
              />
            </a>
          </div>
        </div>
        </Container>
      </footer> */}
    </>
  )
}

function usePages(pages?: Page[]) {
  const { locale } = useRouter()
  const sitePages: Page[] = []
  const legalPages: Page[] = []

  if (pages) {
    pages.forEach((page) => {
      const slug = page.url && getSlug(page.url)

      if (!slug) return
      if (locale && !slug.startsWith(`${locale}/`)) return

      if (isLegalPage(slug, locale)) {
        legalPages.push(page)
      } else {
        sitePages.push(page)
      }
    })
  }

  return {
    sitePages: sitePages.sort(bySortOrder),
    legalPages: legalPages.sort(bySortOrder),
  }
}

const isLegalPage = (slug: string, locale?: string) =>
  locale
    ? LEGAL_PAGES.some((p) => `${locale}/${p}` === slug)
    : LEGAL_PAGES.includes(slug)

// Sort pages by the sort order assigned in the BC dashboard
function bySortOrder(a: Page, b: Page) {
  return (a.sort_order ?? 0) - (b.sort_order ?? 0)
}

export default Footer
