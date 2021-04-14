// https://madewithlove.com/blog/software-engineering/serverless-functions-with-vercel/
// https://gist.github.com/gtalarico/e2114666e7fc38d5c144f7c514da687a
// https://medium.com/@gtalarico/using-airtable-as-a-content-backend-e373cd0d9974
// https://lihbr.com/blog/rate-limiting-without-overhead-netlify-or-vercel-functions


//import Status from 'http-status-codes'
const Airtable = require('airtable')

const { AIRTABLE_API_KEY } = process.env
const { AIRTABLE_BASE_ID } = process.env
const { AIRTABLE_TABLE_NAME } = process.env

const at_base = new Airtable({
    apiKey: AIRTABLE_API_KEY
})
    .base(AIRTABLE_BASE_ID)

const table = at_base()

export default (request, response) => {
    const { query: { name } } = request

    const requestQuery = name

    const searchFieldName = 'certification_number'

    const searchFilter = `filterByFormula={${searchFieldName}}="${requestQuery}"`





}


















//export default (request, response) => response.send('hello world');


/* export default (request, response) => {
    if (request.method !== 'GET') {
        return response.status(Status.BAD_REQUEST).send('Only accepts GET requests.')
    }

    return response.json({
        data: 'Hello World'
    })
} */

/* export default async (request, response) => {
    if (request.method !== 'POST') {
        return response.status(Status.BAD_REQUEST).send('')
    }

    const name = request?.body?.name ?? 'world'

    const response = await fetch(apiURL);

    const data = await.response.json()

    return response.send(data)
} */