// @flow

import micro from 'micro'
import microCors from 'micro-cors'
import expressGraphql from 'express-graphql'
import schema from './schema'
import rootValue from './rootValue'

const server = micro(microCors()(expressGraphql({
  schema,
  rootValue,
  pretty: true,
  graphiql: true,
})))

server.on('error', (error) => {
  console.error('Error:', error.stack)
  process.exit(1)
})

server.listen(5000, () => {
  console.log(`Listening on port ${server.address().port}`)
})
