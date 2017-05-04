const micro = require('micro')
const microCors = require('micro-cors')
const expressGraphql = require('express-graphql')
const schema = require('./schema')
const rootValue = require('./rootValue')

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
