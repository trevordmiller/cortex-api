const fetch = require('node-fetch')

const url = 'http://localhost:5000'

test('responds with hello world', async () => {

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

  expect(json.data.questions.length).toBe(4)
})
