import microCors from 'micro-cors'
import expressGraphql from 'express-graphql'
import schema from './schema'
import rootValue from './rootValue'

export default microCors()(expressGraphql({
  schema,
  rootValue,
  pretty: true,
  graphiql: true,
}))
