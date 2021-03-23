import React from 'react'
import Link from 'next/link'
import Prismic from 'prismic-javascript'
import { RichText, Date } from 'prismic-reactjs'
import { client } from '../prismic-configuration'

export default function BlogHome(props) {
  return (
    <div>
      <img
        src={props.home.data.main_image.url}
        alt="avatar image"
        height="140px"
      />
      <h1>{RichText.asText(props.home.data.headline)}</h1>
      <p>{RichText.asText(props.home.data.subtitle)}</p>

      <ul>
        {props.posts.results.map((post) => (
          <li key={post.uid}>
            <Link href="news/[id]" as={`/news/${post.uid}`}>
              <a>{RichText.render(post.data.entry_title)} </a>
            </Link>
          </li>
        ))}
      </ul>
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
