import { client } from '../../prismic-configuration'
import { RichText } from 'prismic-reactjs'
import Prismic from 'prismic-javascript'
import { Container, Grid, Skeleton } from '@components/ui'

export default function Post({ data }) {
  console.log(data.body)
  //console.log(data.body[0].primary)
  return (
    <div className="pb20">
      <div className="text-center pt-40 pb-56 bg-violet">
        <Container>
          <h1 className="text-4xl tracking-tight leading-10 font-extrabold text-white sm:text-5xl sm:leading-none md:text-6xl">
            {RichText.asText(data.entry_title)}
          </h1>
          <h2 className="mt-3 max-w-md mx-auto text-gray-100 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            {RichText.asText(data.sub_title)}
          </h2>
          <p className="mt-3 max-w-md mx-auto text-gray-100 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            {RichText.asText(data.publish_date)}
          </p>
          {/* <article>
            <img
              className="h-12 w-12 rounded-full"
              src={data.featured_image.url}
              alt="Avatar"
            />
            <header>{RichText.asText(data.entry_title)}</header>
            <main>{RichText.asText(data.article_body)}</main>
          </article> */}
        </Container>
      </div>
      <Container>
        {/* <div className="-mt-96 mx-auto"> */}
        <div className="object-center">
          <img
            class="object-center"
            src={data.featured_image.url}
            alt="Jacket"
          />
        </div>
        <div className="text-lg leading-7 font-medium py-6 text-justify max-w-6xl mx-auto">
          {RichText.asText(data.article_body)}
        </div>
      </Container>
    </div>
  )
}

export async function getStaticProps({ params }) {
  const { uid } = params
  const { data } = await client.getByUID('news_and_blog', uid)
  return {
    props: { data },
  }
}

export async function getStaticPaths() {
  const { results } = await client.query(
    Prismic.Predicates.at('document.type', 'news_and_blog')
  )

  const paths = results.map((post) => ({
    params: {
      uid: post.uid,
    },
  }))

  return {
    paths,
    fallback: false,
  }
}
