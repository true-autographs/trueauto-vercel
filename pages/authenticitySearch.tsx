import React from 'react'
import type { GetStaticPropsContext } from 'next'
import { getConfig } from '@framework/api'
import getAllPages from '@framework/common/get-all-pages'
import { Layout } from '@components/common'
import { Container } from '@components/ui'
import { InferGetStaticPropsType } from 'next'
import { Authenticity } from '@components/Authenticity'
import Airtable from 'airtable'
import { ContentSection, ButtonRolling } from '@components/ui'
import s from './authenticitySearch.module.scss'
import { normalize } from 'node:path'

// TODO: switch api key to 'dummy' account
// TODO: split out airtable request. https://humble.dev/building-a-next-js-static-website-based-on-airtable
export async function getStaticProps({
  preview,
  locale,
}: GetStaticPropsContext) {
  const config = getConfig({ locale })
  const { pages } = await getAllPages({ config, preview })

  // Airtable query
  const { AIRTABLE_API_KEY } = process.env
  const { AIRTABLE_BASE_ID } = process.env
  //const { AIRTABLE_TABLE_NAME } = process.env

  // TODO: move to a config gile when possible. Future proof searchKey and table names
  const tableName = '2021'
  const fields = [
    'certification_number',
    'person',
    'item_type',
    'date',
    'notes',
  ]
  const searchKey = 'certification_number'

  const airtable = new Airtable({
    apiKey: AIRTABLE_API_KEY,
  })

  const records = await airtable
    .base(AIRTABLE_BASE_ID)(tableName)
    .select({
      fields: fields,
    })
    .all()

  // normalize record data then remove any fields missing the 'search key'
  const normalizedRecords = records
    .map((record) =>
      fields.reduce(
        (acc, field) =>
          Object({
            ...acc,
            [field]: record.get(field) || null,
          }),
        Object({})
      )
    )
    .filter((record) => !!record[searchKey])

  return {
    props: { pages, normalizedRecords, searchKey },
  }
}

export default function AuthenticitySearch({
  pages,
  normalizedRecords,
  searchKey,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const [searchTerm, setSearchTerm] = React.useState('')
  const [searchResults, setSearchResults] = React.useState([])
  const [isBeforeFirstSearch, setIsBeforeFirstSearch] = React.useState(true)

  const handleChange = (event) => setSearchTerm(event.target.value)

  const handleSubmit = (event) => {
    // TODO: Sanitize output

    event.preventDefault() // don't redirect

    if (searchTerm.length > 0) {
      const results = normalizedRecords.filter((record) =>
        record[searchKey].toLowerCase().includes(searchTerm)
      )

      setIsBeforeFirstSearch(false)
      setSearchResults(results)
    }
  }

  /* React.useEffect(() => {
    if (searchTerm.length > 0) {
      const results = normalizedRecords.filter((record) => record[searchKey].toLowerCase().includes(searchTerm))

      setIsBeforeFirstSearch(false)
      setSearchResults(results)
    }
  }, [searchTerm]) */

  return (
    <ContentSection className={s.container} el="section">
      <div className={s.content}>
        <div className={s.searchwrapper}>
          <div key="searchDialogue" className={s.searchCard}>
            <h1>Authenticity Search</h1>
            <h2>
              Enter the code from your item's authenticity sticker in the form
              below. If it matches a record in our system, details about your
              item will appear below.
            </h2>
            <form className={s.searchform} onSubmit={handleSubmit}>
              <input
                className={s.textinput}
                onChange={handleChange}
                type="text"
                placeholder="Your Record Number"
                name="name"
                id="name"
                required
              />
              <button className={s.searchbutton} type="submit">
                Search
              </button>
            </form>
            <p>
              If you don't receive a result but have just purchased the product,
              you may need to wait for it to be reflected in our records.
            </p>
          </div>
        </div>

        <div key="searchResults" className={s.resultslist}>
          {searchResults.length > 0 ? (
            searchResults.map((result) => (
              <article key={result.certification_number} className={s.result}>
                <h1 className={s.resultnumber}>
                  # {result.certification_number}
                </h1>

                <div className={s.resultcard}>
                  <h2 className={s.resultdatatitle}>Person:</h2>
                  <p className={s.resultdata}>{result?.person || 'n/a'}</p>

                  <h2 className={s.resultdatatitle}>Item Type:</h2>
                  <p className={s.resultdata}>{result?.item_type || 'n/a'}</p>

                  <h2 className={s.resultdatatitle}>Date:</h2>
                  {/* TODO: beautify date */}
                  <p className={s.resultdata}>{result?.date || 'n/a'}</p>

                  <hr className={s.resultcardbreak} />

                  <h2 className={s.resultdatatitle}>Notes:</h2>
                  <p className={s.resultdata}>{result.notes && result.notes}</p>
                </div>
              </article>
            ))
          ) : (
            <span className={s.noresulttext}>
              {isBeforeFirstSearch
                ? 'Use the form above to search for a product.'
                : 'No results found...'}
            </span>
          )}
        </div>
      </div>
    </ContentSection>
  )
}

AuthenticitySearch.Layout = Layout
