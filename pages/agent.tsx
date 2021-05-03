import type { GetStaticPropsContext } from 'next'
import { getConfig } from '@framework/api'
import getAllPages from '@framework/common/get-all-pages'
import { Layout } from '@components/common'
import { Container } from '@components/ui'
import { InferGetStaticPropsType } from 'next'
import sanityClient from 'lib/sanity/client'

import {
  Hero,
  Services,
  TAStory,
  ContactSection,
  AgentWrapper,
} from '@components/agent'

export async function getStaticProps({
  preview,
  locale,
}: GetStaticPropsContext) {
  const config = getConfig({ locale })
  const { pages } = await getAllPages({ config, preview })

  const agent = await sanityClient.fetch(`*[title == "agents"][0]`)

  return {
    props: { pages, agent },
  }
}

export default function Agent({
  pages,
  agent,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const { title, targetAudience, contentSections } = agent

  return (
    <AgentWrapper>
      {contentSections &&
        contentSections.map((section) => {
          if (!section._type) return null

          if (section._type === 'heroTwoPane')
            return <Hero content={section} audience={targetAudience} />
          if (section._type === 'cardList')
            return <Services content={section} audience={targetAudience} />
          if (section._type === 'story')
            return <TAStory content={section} audience={targetAudience} />
          if (section._type === 'contactForm')
            return (
              <ContactSection content={section} audience={targetAudience} />
            )
        })}
    </AgentWrapper>
  )
}

Agent.Layout = Layout
