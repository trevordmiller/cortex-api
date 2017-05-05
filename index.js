const microCors = require('micro-cors')
const expressGraphql = require('express-graphql')
const schema = require('./utils/schema')
const rootValue = require('./utils/rootValue')

module.exports = microCors()(expressGraphql({
  schema,
  rootValue,
  pretty: true,
  graphiql: true,
}))
