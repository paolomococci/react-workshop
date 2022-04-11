import { ApolloServer } from 'apollo-server'
import { makeExecutableSchema } from '@graphql-tools/schema'
import models from './models'
import resolvers from './graphql/resolvers'
import typeDefs from './graphql/types'
import { $server } from '../config'

const schema = makeExecutableSchema(
  {
    typeDefs,
    resolvers
  }
)

const apolloServer = new ApolloServer(
  {
    schema,
    context: {
      models
    }
  }
)
