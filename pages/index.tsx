import { Layout } from '@components/common'
import { Grid, Marquee, HomeHero, Hero, SportLeagueCard } from '@components/ui'
import { ProductCard } from '@components/product'
// import HomeAllProductsGrid from '@components/common/HomeAllProductsGrid'
import type { GetStaticPropsContext, InferGetStaticPropsType } from 'next'
import Link from 'next/link'

import { getConfig } from '@framework/api'
import getAllProducts from '@framework/product/get-all-products'
import getSiteInfo from '@framework/common/get-site-info'
import getAllPages from '@framework/common/get-all-pages'
import { relative } from 'path'
import image from 'next/image'

import { BsArrowRight } from 'react-icons/bs'

import ES from './es.module.css'
import FP from './fp.module.css'

export async function getStaticProps({
  preview,
  locale,
}: GetStaticPropsContext) {
  const config = getConfig({ locale })

  const { products } = await getAllProducts({
    variables: { first: 12 },
    config,
    preview,
  })

  const { categories, brands } = await getSiteInfo({ config, preview })
  const { pages } = await getAllPages({ config, preview })

  return {
    props: {
      products,
      categories,
      brands,
      pages,
    },
    revalidate: 14400,
  }
}
// TODO: set to only display if there are products for the category
const marqueeItems = [
  {
    name: 'NFL',
    imageUrl: 'sports-logos-05.png',
    link: '/search/nfl',
  },
  {
    name: 'NBA',
    imageUrl: 'sports-logos-02.png',
    link: '/search/nba',
  },
  {
    name: 'MLB',
    imageUrl: 'sports-logos-03.png',
    link: '/search/mlb',
  },
  {
    name: 'NHL',
    imageUrl: 'sports-logos-01.png',
    link: '/search/nhl',
  },
  {
    name: 'MMA',
    imageUrl: 'sports-logos-04.png',
    link: '/search/mma',
  },
]

export default function Home({
  products,
  brands,
  categories,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      {/* TODO: Text button and linking */}
      {/* <section
        className={'w-screen flex md:flex-wrap'}
        style={{ height: '80vh' }}
      >
        <section
          style={{
            width: '50%',
            height: '100%',
            backgroundColor: '#000000',
            position: 'relative',
          }}
        >
          <img
            src={'/IRVING_FRYAR_PHOTO_1024x1024.jpg'}
            alt="all products"
            style={{
              position: 'absolute',
              top: '0',
              left: '0',
              width: '100%',
              minWidth: '100%',
              height: '100%',
              minHeight: '100%',
              objectFit: 'cover',
              opacity: '60%',
            }}
          />
        </section>
        <section
          style={{
            width: '50%',
            height: '100%',
            backgroundColor: '#000000',
            position: 'relative',
          }}
        >
          <img
            src={'/IRVING_FRYAR_PHOTO_1024x1024.jpg'}
            alt="all products"
            style={{
              position: 'absolute',
              top: '0',
              left: '0',
              width: '100%',
              minWidth: '100%',
              height: '100%',
              minHeight: '100%',
              objectFit: 'cover',
              opacity: '60%',
            }}
          />
        </section>
      </section> */}
      <HomeHero />
      {/* <Grid></Grid> */}

      <Marquee variant="primary">
        {marqueeItems.map((item) => (
          <SportLeagueCard
            key={item.name}
            imageUrl={item.imageUrl}
            pageLink={item.link}
          />
        ))}
      </Marquee>
      {/* <Marquee variant="secondary">
        {products.slice(0, 3).map((product, i) => (
          <ProductCard
            key={product.id}
            product={product}
            variant="slim"
            imgProps={{
              width: 320,
              height: 320,
            }}
          />
        ))}
      </Marquee> */}

      {/* TODO: Make card grid for signings -- cards not poster spread */}
      {/* <Grid>
        {products.slice(0, 3).map((product, i) => (
          <ProductCard
            key={product.id}
            product={product}
            imgProps={{
              width: i === 0 ? 1080 : 540,
              height: i === 0 ? 1080 : 540,
            }}
          />
        ))}
      </Grid> */}

      <section className={ES.eventsWrapper}>
        <div className={ES.cardsWrapper}>
          <header className={ES.eventsHeader}>
            <h1>Upcoming signing events</h1>
          </header>
          <article className={ES.eventCard}>
            <div className={ES.imageWrapper}>
              <img
                src="artisgilmoresigningflyeralternate_d68a8c85-7dff-4c5c-be50-a09fd981080b.jpg"
                alt="artis gilmore"
              />
            </div>
            <div className={ES.info}>
              <span className={ES.date}>FEB 27TH 2021</span>
              <h1>
                ARTIS GILMORE AUTOGRAPHED 11x14 PHOTO - PRIVATE AUTOGRAPH
                SIGNING
              </h1>
              <div className={ES.description}>
                <span className={ES.category}>NBA</span>
                <p>
                  Purchase of this ticket is for the ARTIS GILMORE private
                  autograph signing FEB 27TH 2021.
                </p>
              </div>
            </div>
          </article>
          <article className={ES.eventCard}>
            <div className={ES.imageWrapper}>
              <img
                src="artisgilmoresigningflyeralternate_d68a8c85-7dff-4c5c-be50-a09fd981080b.jpg"
                alt="artis gilmore"
              />
            </div>
            <div className={ES.info}>
              <span className={ES.date}>FEB 27TH 2021</span>
              <h1>
                ARTIS GILMORE AUTOGRAPHED 11x14 PHOTO - PRIVATE AUTOGRAPH
                SIGNING
              </h1>
              <div className={ES.description}>
                <span className={ES.category}>NBA</span>
                <p>
                  Purchase of this ticket is for the ARTIS GILMORE private
                  autograph signing FEB 27TH 2021.
                </p>
              </div>
            </div>
          </article>
          <article className={ES.eventCard}>
            <div className={ES.imageWrapper}>
              <img
                src="artisgilmoresigningflyeralternate_d68a8c85-7dff-4c5c-be50-a09fd981080b.jpg"
                alt="artis gilmore"
              />
            </div>
            <div className={ES.info}>
              <span className={ES.date}>FEB 27TH 2021</span>
              <h1>
                ARTIS GILMORE AUTOGRAPHED 11x14 PHOTO - PRIVATE AUTOGRAPH
                SIGNING
              </h1>
              <div className={ES.description}>
                <span className={ES.category}>NBA</span>
                <p>
                  Purchase of this ticket is for the ARTIS GILMORE private
                  autograph signing FEB 27TH 2021.
                </p>
              </div>
            </div>
          </article>
          <article className={ES.eventCard}></article>
          {/* <footer className={ES.eventsFooter}>
            <a href="/events">View all</a>
          </footer> */}
        </div>
      </section>

      {/* 
      
      Featured Products

      */}

      <section className={FP.wrapper}>
        <div className={FP.cardsWrapper}>
          <header className={ES.eventsHeader}>
            <h1>Newest items</h1>
          </header>
          {products.slice(0, 6).map((product, i) => (
            <Link href={`/product/${product.slug}`}>
              <article key="i" className={FP.productCard}>
                <div className={FP.imageWrapper}>
                  <img src={product.images[0].url} alt={product.name} />
                </div>
                <div className={FP.info}>
                  <span>{product.categoryId}</span>
                  <h1>
                    ARTIS GILMORE AUTOGRAPHED 11x14 PHOTO - PRIVATE AUTOGRAPH
                    SIGNING
                  </h1>
                  <hr />
                  <div className={ES.description}>
                    <span className={ES.category}>{product.Categories}</span>
                    <p>
                      Purchase of this ticket is for the ARTIS GILMORE private
                      autograph signing FEB 27TH 2021.
                    </p>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </section>

      {/* 
        News
      */}

      {/* <section style={{ width: '100%', padding: '1.5rem' }}>
        <div
          style={{
            width: '100%',
            maxWidth: '1200px',
            position: 'relative',
            margin: '0 auto',
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'nowrap',
            alignContent: 'center',
            justifyContent: 'center',
          }}
        >
          <div style={{ width: '50%' }}>
            <div
              style={{
                width: '100%',
                paddingBottom: '100%',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              <img
                src="blog_spoof.jpg"
                alt="test image"
                style={{
                  width: '100%',
                  height: '100%',
                  position: 'absolute',
                  objectFit: 'cover',
                }}
              />
            </div>
          </div>
          <div
            style={{
              position: 'relative',
              marginLeft: '-10rem',
              width: '50%',
              height: 'auto',
              color: 'black',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
          >
            <h1 styl={{ color: 'white' }}>Test</h1>
            <p>Test</p>
          </div>
        </div>
      </section> */}

      <Hero
        headline="A BUNCH of new upcoming signings!"
        description="
        John Taylor will be in the house here in Stockton to complete a private signing with over 75 mail in orders! Looking forward to sharing these moments with you after the weekend!"
      />

      {/* <Grid layout="B">
        {products.slice(0, 3).map((product, i) => (
          <ProductCard
            key={product.id}
            product={product}
            imgProps={{
              width: i === 0 ? 1080 : 540,
              height: i === 0 ? 1080 : 540,
            }}
          />
        ))}
      </Grid> */}
      {/* <Marquee>
        {products.slice(0, 3).map((product, i) => (
          <ProductCard
            key={product.id}
            product={product}
            variant="slim"
            imgProps={{
              width: 320,
              height: 320,
            }}
          />
        ))}
      </Marquee> */}
      {/* <HomeAllProductsGrid
        newestProducts={products}
        categories={categories}
        brands={brands}
      /> */}
    </>
  )
}

/* TODO: Paginate search results. */
/* TODO: Offset color on footer. */

Home.Layout = Layout
