import microCors from 'micro-cors'
import expressGraphql from 'express-graphql'
import schema from './schema'

const cors = microCors()

export default microCors(expressGraphql({
  schema,
  pretty: true,
}))
