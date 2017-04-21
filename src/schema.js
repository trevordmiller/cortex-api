import {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
  GraphQLSchema,
} from 'graphql'

const QuestionType = new GraphQLObjectType({  
  name: 'question',
  fields: () => ({
    id: {
      type: GraphQLID,
    },
    title: {
      type: GraphQLString,
    },
    answer: {
      type: GraphQLString,
    },
  })
})

// in-memory test data to be replaced by database
const questions = [
  {
    id: 1,
    title: 'What is the keyboard shortcut to open a new tab?',
    answer: 'Command + T',
  },
  {
    id: 2,
    title: 'What is the keyboard shortcut to close the current tab?',
    answer: 'Command + W',
  },
  {
    id: 3,
    title: 'What is the keyboard shortcut to copy?',
    answer: 'Command + C',
  },
  {
    id: 4,
    title: 'What is the keyboard shortcut to paste?',
    answer: 'Command + V',
  },
]

const queryType = new GraphQLObjectType({  
  name: 'Query',
  fields: () => ({
    questions: {
      type: new GraphQLList(QuestionType),
      resolve: () => new Promise((resolve, reject) => {
        resolve(questions)
      })
    },
  })
})

export default new GraphQLSchema({  
  query: queryType,
})
