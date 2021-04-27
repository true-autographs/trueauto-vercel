import type { GetStaticPropsContext } from 'next'
import { getConfig } from '@framework/api'
import getAllPages from '@framework/common/get-all-pages'
import { Layout } from '@components/common'
import { Container } from '@components/ui'

import { Hero, Services, TAStory, ContactSection } from '@components/b2b'

export async function getStaticProps({
  preview,
  locale,
}: GetStaticPropsContext) {
  const config = getConfig({ locale })
  const { pages } = await getAllPages({ config, preview })
  return {
    props: { pages },
  }
}

export default function B2b() {
  return (
    <>
      <Hero />
      <Services />
      <TAStory />
      <ContactSection />
      {/* <Featured />
      <Team />
      <Finisher /> */}
    </>
  )
}

B2b.Layout = Layout
