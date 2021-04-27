import React, { FC } from 'react'
import s from './TAStory.module.scss'
import Image from 'next/image'
import { ContentSection } from '@components/ui'

const StoryText = () => {
  return (
    <>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
        odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla
        quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent
        mauris. Fusce nec tellus sed augue semper porta. Mauris massa.
        Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad
        litora torquent per conubia nostra, per inceptos himenaeos. Curabitur
        sodales ligula in libero.{' '}
      </p>

      <p>
        Sed dignissim lacinia nunc. <b>Praesent mauris</b>. Curabitur tortor.{' '}
        <i>Lorem ipsum dolor sit amet, consectetur adipiscing elit</i>.
        Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. Maecenas
        mattis. Sed convallis tristique sem. Proin ut ligula vel nunc egestas
        porttitor.{' '}
        <i>Lorem ipsum dolor sit amet, consectetur adipiscing elit</i>. Morbi
        lectus risus, iaculis vel, suscipit quis, luctus non, massa. Fusce ac
        turpis quis ligula lacinia aliquet. Mauris ipsum. Nulla metus metus,
        ullamcorper vel, tincidunt sed, euismod in, nibh. Quisque volutpat
        condimentum velit. <i>Sed dignissim lacinia nunc</i>. Class aptent
        taciti sociosqu ad litora torquent per conubia nostra, per inceptos
        himenaeos.{' '}
      </p>

      <p>
        <b>Maecenas mattis</b>. Nam nec ante. Sed lacinia, urna non tincidunt
        mattis, tortor neque adipiscing diam, a cursus ipsum ante quis turpis.
        Nulla facilisi. Ut fringilla. Suspendisse potenti. Nunc feugiat mi a
        tellus consequat imperdiet. Vestibulum sapien. Proin quam. Etiam
        ultrices. Suspendisse in justo eu magna luctus suscipit. Sed lectus.
        Integer euismod lacus luctus magna.{' '}
      </p>

      <p>
        Quisque cursus, metus vitae pharetra auctor, sem massa mattis sem, at
        interdum magna augue eget diam. Vestibulum ante ipsum primis in faucibus
        orci luctus et ultrices posuere cubilia Curae; Morbi lacinia molestie
        dui. Praesent blandit dolor.{' '}
        <i>Morbi lectus risus, iaculis vel, suscipit quis, luctus non, massa</i>
        . Sed non quam. In vel mi sit amet augue congue elementum.{' '}
        <b>Vestibulum sapien</b>. Morbi in ipsum sit amet pede facilisis
        laoreet. Donec lacus nunc, viverra nec, blandit vel, egestas et, augue.
        Vestibulum tincidunt malesuada tellus. Ut ultrices ultrices enim.{' '}
        <b>
          Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
          posuere cubilia Curae; Morbi lacinia molestie dui
        </b>
        . Curabitur sit amet mauris. Morbi in dui quis est pulvinar ullamcorper.
        Nulla facilisi.{' '}
      </p>

      <p>
        Integer lacinia sollicitudin massa. Cras metus. Sed aliquet risus a
        tortor. Integer id quam. Morbi mi. <b>Curabitur sit amet mauris</b>.
        Quisque nisl felis, venenatis tristique, dignissim in, ultrices sit
        amet, augue. Proin sodales libero eget ante. Nulla quam. Aenean laoreet.{' '}
        <b>Nulla facilisi</b>. Vestibulum nisi lectus, commodo ac, facilisis ac,
        ultricies eu, pede. Ut orci risus, accumsan porttitor, cursus quis,
        aliquet eget, justo. Sed pretium blandit orci. Ut eu diam at pede
        suscipit sodales. Aenean lectus elit, fermentum non, convallis id,
        sagittis at, neque.{' '}
      </p>
    </>
  )
}

interface TAStoryProps {}

const TAStory: React.FC<TAStoryProps> = ({}) => {
  return (
    <ContentSection className={s.container} el="section">
      <div className={s.sectiongrid}>
        <header className={s.sectiontext}>
          <h1>Our Founder's Story</h1>
          <h2>We believe the story of our founder speaks to our integrity.</h2>
        </header>
        <figure className={s.imagefigure}>
          <Image
            className={s.image}
            src="/imran-speaking.jpg"
            alt="imran speaking at conference"
            layout="fill"
            objectFit="cover"
          />
          <figcaption>Imran Speaking at Accelerate Summit</figcaption>
        </figure>
        <div className={s.sectionbody}>
          <StoryText />
        </div>
        <Image
          src="/imran_signature_inverted.jpg"
          alt="Imran's signature"
          width={136}
          height={54}
          objectFit="contain"
        />
      </div>
    </ContentSection>
  )
}

export default TAStory
