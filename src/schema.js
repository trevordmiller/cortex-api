import {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
  GraphQLSchema,
} from 'graphql'

const TodoType = new GraphQLObjectType({  
  name: 'todo',
  fields: () => ({
    id: {
      type: GraphQLID,
    },
    title: {
      type: GraphQLString,
    },
    completed: {
      type: GraphQLBoolean,
    },
  })
})

// in-memory test data to be replaced by database
const todos = [  
  {
    "id": 1,
    "title": "Write in journal",
    "completed": true,
  },
  {
    "id": 2,
    "title": "Take out the garbage",
    "completed": false,
  },
]

const queryType = new GraphQLObjectType({  
  name: 'Query',
  fields: () => ({
    todos: {
      type: new GraphQLList(TodoType),
      resolve: () => todos,
    },
  })
})

export default new GraphQLSchema({  
  query: queryType,
})
