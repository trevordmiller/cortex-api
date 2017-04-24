// @flow

import {graphql, buildSchema} from 'graphql'

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

export default schema
