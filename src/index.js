import microCors from 'micro-cors'
import expressGraphql from 'express-graphql'
import schema from './schema'
import rootValue from './rootValue'

const cors = microCors()

export default cors(expressGraphql({
  schema,
  rootValue,
  pretty: true,
  graphiql: true,
}))
