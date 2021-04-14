import { Layout } from '@components/common'
import {
  Grid,
  HomeHero,
  Hero,
  SportLeagueCard,
  Marquee,
  ProductSection,
  ContentSection,
  ButtonRolling
} from '@components/ui'
import { ProductCard } from '@components/product'
// import HomeAllProductsGrid from '@components/common/HomeAllProductsGrid'
import type { GetStaticPropsContext, InferGetStaticPropsType } from 'next'
import Link from 'next/link'

import { getConfig } from '@framework/api'
import getAllProducts from '@framework/product/get-all-products'
import getProduct from '@framework/product/get-product'
import getSiteInfo from '@framework/common/get-site-info'
import getAllPages from '@framework/common/get-all-pages'
import { relative } from 'path'
import image from 'next/image'

import { BsArrowRight } from 'react-icons/bs'
import Ticker from 'react-ticker'
//import Marquee from 'react-fast-marquee'

import ES from './es.module.scss'
import FP from './fp.module.scss'
import s from './home.module.scss'

export async function getStaticProps({
  preview,
  locale,
}: GetStaticPropsContext) {
  const config = getConfig({ locale })

  const { products } = await getAllProducts({
    variables: { first: 8 },
    config,
    preview,
  })

  const eventTypeName = 'AUTO TICKET'
  const { products: events } = await getAllProducts({
    variables: { first: 4, query: `product_type:${eventTypeName}` },
  })

  const { categories, brands } = await getSiteInfo({ config, preview })
  const { pages } = await getAllPages({ config, preview })

  return {
    props: {
      products,
      categories,
      brands,
      pages,
      events,
    },
    revalidate: 14400,
  }
}
// TODO: set to only display if there are products for the category
const marqueeItems = [
  {
    name: 'NFL',
    imageUrl: 'league_nfl.jpg',
    link: '/search/nfl',
  },
  {
    name: 'NBA',
    imageUrl: 'league_nba.jpg',
    link: '/search/nba',
  },
  {
    name: 'MLB',
    imageUrl: 'league_mlb.jpg',
    link: '/search/mlb',
  },
  {
    name: 'NHL',
    imageUrl: 'league_nhl.jpg',
    link: '/search/nhl',
  },
  {
    name: 'MMA',
    imageUrl: 'league_mma.jpg',
    link: '/search/mma',
  },
  {
    name: 'Boxing',
    imageUrl: 'league_boxing.jpg',
    link: '/search/boxing',
  },
  {
    name: 'Entertainment',
    imageUrl: 'league_entertainment.jpg',
    link: '/search/entertainment',
  },
]

const tickerItems = () =>
  marqueeItems.map((item, index) => (
    <SportLeagueCard
      key={`${item.name}_${index}`}
      name={item.name}
      imageUrl={item.imageUrl}
      pageLink={item.link}
    />
  ))



export default function Home({
  products,
  brands,
  categories,
  events,
}: InferGetStaticPropsType<typeof getStaticProps>) {

  const prods = {
    title: 'products',
    pageLink: 'search/',
    imageUrl: 'ta_sample_bw_on_knees.jpg',
  }
  const evnts = {
    title: 'events',
    pageLink: 'search/',
    imageUrl:
      'https://images.unsplash.com/photo-1612151387614-0d29a04ff5f3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=975&q=80',
  }

  return (
    <>
      <div className={s.hero}>
        <ContentSection className={s.container} el="section">
          <div className={s.herogrid}>
            <a href={prods.pageLink} className={s.linkWrapper} key={'products'}>

              <div className={s.section}>
                <img
                  className={s.backgroundImage}
                  src={prods.imageUrl}
                  alt="product intro image"
                />
                <h1 className={s.pseudobutton}>{prods.title}</h1>
              </div>

            </a>
            <a href={evnts.pageLink} className={s.linkWrapper} key={'events'}>

              <div className={s.section}>
                <img
                  className={s.backgroundImage}
                  src={evnts.imageUrl}
                  alt="events intro image"
                />

                <h1 className={s.pseudobutton}>{evnts.title}</h1>
              </div>

            </a>
          </div>
        </ContentSection>
        <Marquee>{tickerItems()}</Marquee>
      </div>

      <ProductSection
        key={'signings'}
        products={events}
        alignBottom={false}
        title={'Signing Events'}
        pageUrl={`products/signingevents`}
        hideInfo={true}
        buttonText={'View All Signings'}
      />

      {/* 
      
      Featured Products

      */}

      <ProductSection
        key={'products'}
        products={products}
        alignBottom={true}
        title={'New Products'}
        pageUrl={`products`}
        hideInfo={false}
        buttonText={'View All Products'}
      />

      {/* <section className={FP.wrapper}>
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
      </section> */}

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
      {/* 
      <Hero
        headline="A BUNCH of new upcoming signings!"
        description="
        John Taylor will be in the house here in Stockton to complete a private signing with over 75 mail in orders! Looking forward to sharing these moments with you after the weekend!"
      /> */}

      <ContentSection>
        <div className={s.blogLayout}>
          <div className={s.blogLeft}>
            <h1>Latest News</h1>
            <p>Learn about what what we're doing, with who, and what's to come.</p>
            <a href="/" className={s.blogButton}>See Latest News</a>
          </div>
          <div className={s.blogGrid}>
            <div className={s.blogPost}>
              <span>SEPT 24, 2020</span>
              <h1>A BUNCH of new upcoming signings!</h1>
              <hr />
              <p>John Taylor will be in the house here in Stockton to complete a private signing with over 75 mail in orders! Looking forward to sharing these moments with you after the weekend!</p>
            </div>
            <div className={s.blogPost}>
              <span>SEPT 24, 2020</span>
              <h1>A BUNCH of new upcoming signings!</h1>
              <hr />
              <p>John Taylor will be in the house here in Stockton to complete a private signing with over 75 mail in orders! Looking forward to sharing these moments with you after the weekend!</p>
            </div>
            <div className={s.blogPost}>
              <span>SEPT 24, 2020</span>
              <h1>A BUNCH of new upcoming signings!</h1>
              <hr />
              <p>John Taylor will be in the house here in Stockton to complete a private signing with over 75 mail in orders! Looking forward to sharing these moments with you after the weekend!</p>
            </div>
          </div>
        </div>
      </ContentSection>

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
