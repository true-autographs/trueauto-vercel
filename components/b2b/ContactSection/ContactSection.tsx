import React, { FC } from 'react'
import s from './ContactSection.module.scss'
import Image from 'next/image'
import { ContentSection } from '@components/ui'
import { urlFor } from 'lib/sanity/urlFor'

const ContactSection = ({ content, audience }) => {
  const { title, subTitle } = content

  return (
    <ContentSection className={s.container} el="section">
      <div id="contactform" className={s.sectiongrid}>
        <header className={s.sectiontext}>
          {title && <h1>{title}</h1>}

          {subTitle && <h2>{subTitle}</h2>}
        </header>
        <form className={s.form}>
          <div className={s.formgroup}>
            <label htmlFor="name">Name</label>
            <input type="name" placeholder="Your Name" />
          </div>
          <div className={s.formgroup}>
            <label htmlFor="email" className={s.toppadded}>
              Email
            </label>
            <input type="email" placeholder="Your Email" />
          </div>
          <div className={s.formgroup}>
            <label htmlFor="message" className={s.toppadded}>
              Message
            </label>
            <textarea rows={4} cols={85} placeholder="Type a message..." />
          </div>
          <button className={s.submit} type="button">
            Send your message
          </button>
        </form>
      </div>
    </ContentSection>
  )
}

export default ContactSection
