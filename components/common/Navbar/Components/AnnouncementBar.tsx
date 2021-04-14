import React, { ReactFragment, useState } from 'react'
import cn from 'classnames'
import Link from 'next/link'
import { ContentSection } from '@components/ui'
import { useUI } from '@components/ui/context'
import s from './AnnouncementBar.module.scss'

const AnnouncementBar = ({}) => {
  const { showAnnouncement, closeAnnouncement, announcement } = useUI()

  const [isOpen, setIsOpen] = useState(announcement)

  const message = "Here's an announcement. FREE SHIPPING!"
  const targetLink = '/search'

  const announcementMessage: ReactFragment = (
    <p className={s.message}>{message}</p>
  )

  const closeButton: ReactFragment = (
    <button
      className={s.closebutton}
      onClick={() => {
        setIsOpen(false)
        closeAnnouncement()
      }}
    >
      close
    </button>
  )

  return <div className={cn(s.announcementbar, {[s.announcementbar__closed]: !isOpen})}>
    <ContentSection
      className={s.contentsection}
      el={'aside'}
      noPadVertical={true}
      >
      {targetLink ? (
        <Link href={targetLink}>
          <a>{announcementMessage}</a>
        </Link>
      ) : (
        announcementMessage
        )}
      {closeButton}
    </ContentSection>
        </div>
}

export default AnnouncementBar
