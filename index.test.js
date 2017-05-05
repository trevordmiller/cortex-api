const fetch = require('node-fetch')

const url = 'http://localhost:3000'

test('query question titles', async () => {

  const query = `{
    questions {
      id
      title
    }
  }`

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/graphql'
    },
    body: query,
  })

  const json = await response.json()

  expect(json.data.questions[0].title).toBe('What are the known states of matter?')
})
