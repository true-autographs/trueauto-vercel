import { Layout } from '@components/common'
import { Grid, Marquee, Hero } from '@components/ui'
import { ProductCard } from '@components/product'
// import HomeAllProductsGrid from '@components/common/HomeAllProductsGrid'
import type { GetStaticPropsContext, InferGetStaticPropsType } from 'next'

import { getConfig } from '@framework/api'
import getAllProducts from '@framework/product/get-all-products'
import getSiteInfo from '@framework/common/get-site-info'
import getAllPages from '@framework/common/get-all-pages'
import { relative } from 'path'

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

export default function Home({
  products,
  brands,
  categories,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      {/* TODO: Text button and linking */}
      <section
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
      </section>
      {/* <Grid></Grid> */}
      <h1>--- League Categories ---</h1>
      <Marquee variant="secondary">
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
      </Marquee>
      <h1>--- Featured Products ---</h1>
      <Marquee variant="secondary">
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
      </Marquee>

      {/* TODO: Make card grid for signings -- cards not poster spread */}
      <Grid>
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
      </Grid>

      <Hero
        headline="A BUNCH of new upcoming signings!"
        description="
        John Taylor will be in the house here in Stockton to complete a private signing with over 75 mail in orders! Looking forward to sharing these moments with you after the weekend!"
      />
      <Grid layout="B">
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
      </Grid>
      <Marquee>
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
      </Marquee>
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
