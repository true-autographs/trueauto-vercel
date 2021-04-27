import React, { FC } from 'react'
import { ContentSection, ButtonRolling } from '@components/ui'
import s from './Services.module.scss'
import cn from 'classnames'
import Image from 'next/image'

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

interface ServicesProps {}

const Services: React.FC<ServicesProps> = ({}) => {
  return (
    <ContentSection>
      <div className={s.blogLayout}>
        <div className={s.blogLeft}>
          <h1>Our Services</h1>
          <p>
            We can help you achieve your inventory goals. We work directly with
            athletes and their agents to organize bulk signings of desirable
            memorabilia items.
          </p>
          {/* <a href="/" className={s.blogButton}>See Latest News</a> */}
          <a href="#contactform" className={s.ctabutton}>
            Learn More
          </a>
        </div>
        <div className={s.blogGrid}>
          <ServiceCard
            serviceName="Service Name"
            description="Service Description"
            imageSrc="/temp_birdingrass.jpeg"
            imageAlt="card image"
          />
          <ServiceCard
            serviceName="Service Name"
            description="Service Description"
            imageSrc="/temp_birdingrass.jpeg"
            imageAlt="card image"
          />
          <ServiceCard
            serviceName="Service Name"
            description="Service Description"
            imageSrc="/temp_birdingrass.jpeg"
            imageAlt="card image"
          />
          {/* <div className={s.blogPost}>
            <h1>A BUNCH of new upcoming signings!</h1>
            <hr />
            <p>John Taylor will be in the house here in Stockton to complete a private signing with over 75 mail in orders! Looking forward to sharing these moments with you after the weekend!</p>
          </div>
          <div className={s.blogPost}>
            <h1>A BUNCH of new upcoming signings!</h1>
            <hr />
            <p>John Taylor will be in the house here in Stockton to complete a private signing with over 75 mail in orders! Looking forward to sharing these moments with you after the weekend!</p>
          </div>
          <div className={s.blogPost}>
            <h1>A BUNCH of new upcoming signings!</h1>
            <hr />
            <p>John Taylor will be in the house here in Stockton to complete a private signing with over 75 mail in orders! Looking forward to sharing these moments with you after the weekend!</p>
          </div> */}
        </div>
      </div>
    </ContentSection>
  )
  /* return (
      <ContentSection className={s.container} el="section">
          <div className={s.sectiongrid}>
              <header className={s.sectiontext}>
                  <h1>We provide a range of services</h1>
                  <h2>We can help you achieve your inventory goals.</h2>
              </header>
              <div className={s.servicecards}>
                  <ServiceCard
                      serviceName="Service Name"
                      description="Service Description"
                      imageSrc="/temp_birdingrass.jpeg"
                      imageAlt="card image"
                  />
                  <ServiceCard
                      serviceName="Service Name"
                      description="Service Description"
                      imageSrc="/temp_birdingrass.jpeg"
                      imageAlt="card image"
                  />
                  <ServiceCard
                      serviceName="Service Name"
                      description="Service Description"
                      imageSrc="/temp_birdingrass.jpeg"
                      imageAlt="card image"
                  />
                  <ServiceCard
                      serviceName="Service Name"
                      description="Service Description"
                      imageSrc="/temp_birdingrass.jpeg"
                      imageAlt="card image"
                  />
              </div>
              <footer className={s.sectiontext}>
                  <h3>Find out how we can accomodate you goals.</h3>
                  <ButtonRolling className={s.ctabutton} text={'Contact Us'} href="" />
              </footer>
          </div>
      </ContentSection>

  ) */
}

/*
const Services = () => (
  <>
    <section className="pb-20 bg-gray-300 -mt-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap">
          <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
              <div className="px-4 py-5 flex-auto">
                <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400">
                  <i className="fas fa-award"></i>
                </div>
                <h6 className="text-xl font-semibold">Awarded Agency</h6>
                <p className="mt-2 mb-4 text-gray-600">
                  Divide details about your product or agency work into parts. A
                  paragraph describing a feature will be enough.
                </p>
              </div>
            </div>
          </div>

          <div className="w-full md:w-4/12 px-4 text-center">
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
              <div className="px-4 py-5 flex-auto">
                <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-blue-400">
                  <i className="fas fa-retweet"></i>
                </div>
                <h6 className="text-xl font-semibold">Free Revisions</h6>
                <p className="mt-2 mb-4 text-gray-600">
                  Keep you user engaged by providing meaningful information.
                  Remember that by this time, the user is curious.
                </p>
              </div>
            </div>
          </div>

          <div className="pt-6 w-full md:w-4/12 px-4 text-center">
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
              <div className="px-4 py-5 flex-auto">
                <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-green-400">
                  <i className="fas fa-fingerprint"></i>
                </div>
                <h6 className="text-xl font-semibold">Verified Company</h6>
                <p className="mt-2 mb-4 text-gray-600">
                  Write a few lines about each one. A paragraph describing a
                  feature will be enough. Keep you user engaged!
                </p>
              </div>
            </div>
          </div>

          <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
              <div className="px-4 py-5 flex-auto">
                <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400">
                  <i className="fas fa-award"></i>
                </div>
                <h6 className="text-xl font-semibold">Awarded Agency</h6>
                <p className="mt-2 mb-4 text-gray-600">
                  Divide details about your product or agency work into parts. A
                  paragraph describing a feature will be enough.
                </p>
              </div>
            </div>
          </div>

          <div className="w-full md:w-4/12 px-4 text-center">
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
              <div className="px-4 py-5 flex-auto">
                <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-blue-400">
                  <i className="fas fa-retweet"></i>
                </div>
                <h6 className="text-xl font-semibold">Free Revisions</h6>
                <p className="mt-2 mb-4 text-gray-600">
                  Keep you user engaged by providing meaningful information.
                  Remember that by this time, the user is curious.
                </p>
              </div>
            </div>
          </div>

          <div className="pt-6 w-full md:w-4/12 px-4 text-center">
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
              <div className="px-4 py-5 flex-auto">
                <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-green-400">
                  <i className="fas fa-fingerprint"></i>
                </div>
                <h6 className="text-xl font-semibold">Verified Company</h6>
                <p className="mt-2 mb-4 text-gray-600">
                  Write a few lines about each one. A paragraph describing a
                  feature will be enough. Keep you user engaged!
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-center mt-32">
          <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
            <div className="text-gray-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-gray-100">
              <i className="fas fa-user-friends text-xl"></i>
            </div>
            <h3 className="text-3xl mb-2 font-semibold leading-normal">
              Working with us is a pleasure
            </h3>
            <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700">
              Don't let your uses guess by attaching tooltips and popoves to any
              element. Just make sure you enable them first via JavaScript.
            </p>
            <p className="text-lg font-light leading-relaxed mt-0 mb-4 text-gray-700">
              The kit comes with three pre-built pages to help you get started
              faster. You can change the text and images and you're good to go.
              Just make sure you enable them first via JavaScript.
            </p>
            <a
              href="https://www.creative-tim.com/learning-lab/tailwind-starter-kit#/presentation"
              className="font-bold text-gray-800 mt-8"
            >
              Check Tailwind Starter Kit!
            </a>
          </div>

          <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
            <div className="relative flex flex-col min-w-0 break-words  w-full mb-6 shadow-lg rounded-lg bg-pink-600">
              <img
                alt="..."
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80"
                className="w-full align-middle rounded-t-lg"
              />
              <blockquote className="relative p-8 mb-4">
                <svg
                  preserveAspectRatio="none"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 583 95"
                  className="absolute left-0 w-full block"
                  style={{
                    height: '95px',
                    top: '-94px',
                  }}
                >
                  <polygon
                    points="-30,95 583,95 583,65"
                    className="text-pink-600 fill-current"
                  ></polygon>
                </svg>
                <h4 className="text-xl font-bold text-white">
                  Top Notch Services
                </h4>
                <p className="text-md font-light mt-2 text-white">
                  The Arctic Ocean freezes every winter and much of the sea-ice
                  then thaws every summer, and that process will continue
                  whatever happens.
                </p>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  </>
)
*/

export default Services
