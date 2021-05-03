import React, { FC } from 'react'
import s from './TAStory.module.scss'
import Image from 'next/image'
import { ContentSection } from '@components/ui'
import { urlFor } from 'lib/sanity/urlFor'
import { simplePortableText } from 'lib/sanity/simplePortableText'

const TAStory = ({ content, audience }) => {
  const { title, subTitle, storyImage, body, signature } = content
  return (
    <ContentSection className={s.container} el="section">
      <div className={s.sectiongrid}>
        <header className={s.sectiontext}>
          {title && <h1>{title}</h1>}

          {subTitle && <h2>{subTitle}</h2>}
        </header>

        {storyImage && (
          <figure className={s.imagefigure}>
            <Image
              className={s.image}
              src={urlFor(storyImage.asset)}
              alt={storyImage.alt}
              layout="fill"
              objectFit="cover"
            />
            <figcaption>{storyImage.alt}</figcaption>
          </figure>
        )}

        {body && (
          <div className={s.sectionbody}>{simplePortableText(body)}</div>
        )}

        {signature && (
          <Image
            src={urlFor(signature.asset)}
            alt={signature.alt}
            width={136}
            height={54}
            objectFit="contain"
          />
        )}
      </div>
    </ContentSection>
  )
}

export default TAStory
