import { Layout } from '@components/common'

import React from 'react'
import Link from 'next/link'
import Prismic from 'prismic-javascript'
import { RichText, Date } from 'prismic-reactjs'
import { client } from '../prismic-configuration'

import FP from './fp.module.scss'
import ES from './es.module.scss'
import autoprefixer from 'autoprefixer'
import { NewsArticleJsonLd } from 'next-seo'

export default function BlogHome(props) {
  return (
    <div>
      <div
        style={{
          width: '100vw',
          height: '30rem',
          backgroundColor: '#E87722',
        }}
      ></div>
      <section
        style={{
          width: '100%',
          maxWidth: '1400px',
          padding: '1.5rem',
          margin: '-20rem auto 0 auto',
        }}
      >
        <section
          style={{
            width: '100%',
            maxWidth: '75ch',
            margin: '0 auto 6rem auto',
          }}
        >
          <h1
            style={{
              fontSize: '4rem',
              color: 'white',
              textTransform: 'uppercase',
              textAlign: 'center',
              paddingBottom: '4rem',
            }}
          >
            {RichText.asText(props.home.data.headline)}
          </h1>
          <img
            src={props.home.data.main_image.url}
            alt="avatar image"
            style={{
              width: '100%',
              boxShadow:
                '0 1px 2px rgba(0,0,0,0.07), 0 2px 4px rgba(0,0,0,0.07), 0 4px 8px rgba(0,0,0,0.07), 0 8px 16px rgba(0,0,0,0.07),0 16px 32px rgba(0,0,0,0.07), 0 32px 64px rgba(0,0,0,0.07)',
            }}
          />

          {/* <p
            style={{
              width: '100%',
              textAlign: 'center',
              marginTop: '6rem',
              fontSize: '1.5rem',
            }}
          >
            {RichText.asText(props.home.data.subtitle)}
          </p> */}
        </section>
        <section
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr 1fr',
            columnGap: '1.5rem',
            rowGap: '3rem',
            width: '100%',
            margin: '0 auto',
            padding: '4rem 1.5rem 1.5rem 1.5rem',
            borderTop: 'solid 3px black',
          }}
        >
          {props.posts.results.map((post) => (
            <article key={post.uid}>
              <Link href="news/[id]" as={`/news/${post.uid}`}>
                <a style={{ width: '100%' }}>
                  <article key="i" className={FP.productCard}>
                    <div className={FP.imageWrapper}>
                      <img src={post.data.featured_image?.url} />
                    </div>
                    <div className={FP.info}>
                      {/* <span>{product.categoryId}</span> */}
                      <h1>{RichText.render(post.data.entry_title)}</h1>
                      <hr />
                      <div className={ES.description}>
                        {/*  <span className={ES.category}>{product.Categories}</span> */}
                        <p
                          style={{
                            height: 'auto',
                            maxHeight: '8rem',
                            overflow: 'hidden',
                          }}
                        >
                          {RichText.render(
                            post.data.article_body.slice(0, 120)
                          )}
                        </p>
                      </div>
                    </div>
                  </article>
                </a>
              </Link>
            </article>
          ))}
        </section>
      </section>
    </div>
  )
}

export async function getStaticProps() {
  const home = await client.getSingle('news_home')
  const posts = await client.query(
    Prismic.Predicates.at('document.type', 'news_and_blog'),
    { orderings: '[my.news_and_blog.publish_date desc]' }
  )
  return {
    props: {
      home,
      posts,
    },
  }
}

BlogHome.Layout = Layout
