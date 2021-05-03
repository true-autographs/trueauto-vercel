import type { GetStaticPropsContext } from 'next'
import { getConfig } from '@framework/api'
import getAllPages from '@framework/common/get-all-pages'
import { Layout } from '@components/common'
import { Container } from '@components/ui'
import { InferGetStaticPropsType } from 'next'

import { Hero, Services, TAStory, ContactSection } from '@components/b2b'

import sanityClient from 'lib/sanity/client'

export async function getStaticProps({
  preview,
  locale,
}: GetStaticPropsContext) {
  const config = getConfig({ locale })
  const { pages } = await getAllPages({ config, preview })

  const b2b = await sanityClient.fetch(`*[title == "b2b"][0]`)

  return {
    props: { pages, b2b },
  }
}

export default function B2b({
  pages,
  b2b,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const { title, targetAudience, contentSections } = b2b

  return (
    contentSections &&
    contentSections.map((section) => {
      if (!section._type) return null

      if (section._type === 'heroTwoPane')
        return <Hero content={section} audience={targetAudience} />
      if (section._type === 'cardList')
        return <Services content={section} audience={targetAudience} />
      if (section._type === 'story')
        return <TAStory content={section} audience={targetAudience} />
      if (section._type === 'contactForm')
        return <ContactSection content={section} audience={targetAudience} />
    })
  )
}

/* export default function B2b({props, b2b}) {
  return (
    <>
      <Hero />
      <Services />
      <TAStory />
      <ContactSection />
    </>
  )
} */

B2b.Layout = Layout
