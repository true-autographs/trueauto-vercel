import client from './client'
import BlockContent from '@sanity/block-content-to-react'

const EmbedHTML = ({ node }) =>
  // eslint-disable-next-line react/no-danger
  node?.html ? <div dangerouslySetInnerHTML={{ __html: node.html }} /> : null

const Bold = ({ children }) => (
  <span style={{ fontWeight: 700 }}>{children}</span>
)

const Color = ({ mark, children }) => (
  <span style={{ color: mark.hex }}>{children}</span>
)

const FontWeight500 = ({ children }) => (
  <span style={{ fontWeight: 500 }}>{children}</span>
)

const serializers = {
  marks: { bold: Bold, color: Color, wt500: FontWeight500 },
  types: {
    embedHTML: EmbedHTML,
  },
}

export const simplePortableText = (blocks) => (
  <BlockContent blocks={blocks} serializers={serializers} />
)
