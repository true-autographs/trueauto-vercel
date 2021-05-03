import React, { FC } from 'react'
import { ContentSection, ButtonRolling } from '@components/ui'
import s from './Services.module.scss'
import cn from 'classnames'
import Image from 'next/image'
import { urlFor } from 'lib/sanity/urlFor'

interface ServiceCardProps {
  serviceName: string
  description: string
  imageSrc: string
  imageAlt: string
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  serviceName,
  description,
  imageSrc,
  imageAlt,
}) => {
  return (
    <article className={s.servicecard}>
      <figure className={s.servicecardimagewrapper}>
        <Image
          className={s.servicecardimage}
          src={imageSrc}
          alt={imageAlt}
          layout="fill"
          objectFit="cover"
        />
      </figure>
      <div className={s.servicecardtextwrapper}>
        <h1>{serviceName}</h1>
        <p>{description}</p>
      </div>
    </article>
  )
}

const Services = ({ content, audience }) => {
  // add isOutlined
  const { title, description, ctaButtonText, cards } = content
  return (
    <ContentSection>
      <div className={s.blogLayout}>
        <div className={s.blogLeft}>
          {title && <h1>{title}</h1>}

          {description && <p>{description}</p>}

          {/* <a href="/" className={s.blogButton}>See Latest News</a> */}

          {ctaButtonText && (
            <a href="#contactform" className={s.ctabutton}>
              {ctaButtonText}
            </a>
          )}
        </div>
        <div className={s.blogGrid}>
          {cards &&
            cards.map((card) => (
              <ServiceCard
                serviceName={card.title}
                description={card.description}
                imageSrc={urlFor(card.cardImage.asset)}
                imageAlt={card.cardImage.alt}
              />
            ))}
        </div>
      </div>
    </ContentSection>
  )
}

export default Services
