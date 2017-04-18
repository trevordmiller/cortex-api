import microCors from 'micro-cors'
import expressGraphql from 'express-graphql'
import schema from './schema'

const cors = microCors()

export default cors(expressGraphql({
  schema,
  pretty: true,
  graphiql: true,
}))
