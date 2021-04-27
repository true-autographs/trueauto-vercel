import React, { FC } from 'react'
import { ContentSection, ButtonRolling } from '@components/ui'
import s from './Home.module.scss'
import cn from 'classnames'
import Image from 'next/image'

interface HeroProps {}

const Hero: React.FC<HeroProps> = ({}) => {
  return (
    <ContentSection className={s.container} el="section">
      <div className={s.herogrid}>
        <div className={s.herotext}>
          <h1>We can provide the best memorabilia in the business</h1>
          <h2>
            Through our connections, integrity, and care, we can provide a
            consistent flow of memorabilia to you at a wholesale price.
          </h2>
          <ButtonRolling
            className={s.ctabutton}
            text={'Contact Us'}
            href="#contactform"
          />
        </div>
        <div className={s.imagewrapper}>
          <Image
            className={s.heroimage}
            src="/temp-walloffootballs.jpg"
            alt="collage of signing events"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
    </ContentSection>
  )
}

/* const OldHero = () => (
    <div
        className="relative pt-16 pb-32 flex content-center items-center justify-center"
        style={{
            minHeight: '75vh',
        }}
    >
        <div
            className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{
                backgroundImage:
                    "url('https://images.unsplash.com/photo-1585735019459-20f59ca30f8d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=3450&q=80')",
            }}
        >
            <span
                id="blackOverlay"
                className="w-full h-full absolute opacity-75 bg-black"
            ></span>
        </div>
        <div className="container relative mx-auto">
            <div className="items-center flex flex-wrap">
                <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                    <div className="pr-12">
                        <h1 className="text-white font-semibold text-5xl">
                            Your story starts with us.
              </h1>
                        <p className="mt-4 text-lg text-gray-300">
                            This is a simple example of a Landing Page you can build using
                            Tailwind Starter Kit. It features multiple CSS components based on
                            the Tailwindcss design system.
              </p>
                    </div>
                </div>
            </div>
        </div>
        <div
            className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden"
            style={{ height: '70px', transform: 'translateZ(0)' }}
        >
            <svg
                className="absolute bottom-0 overflow-hidden"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                version="1.1"
                viewBox="0 0 2560 100"
                x="0"
                y="0"
            >
                <polygon
                    className="text-gray-300 fill-current"
                    points="2560 0 2560 100 0 100"
                ></polygon>
            </svg>
        </div>
    </div>
) */

export default Hero
