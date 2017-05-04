const {buildSchema} = require('graphql')

const schema = buildSchema(`
  type Question {
    id: ID!
    title: String!
    answer: String!
  }

  type Query {
    questions: [Question]!
  }
`)

module.exports = schema
