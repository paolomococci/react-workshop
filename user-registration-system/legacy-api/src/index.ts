import { ApolloServer, makeExecutableSchema } from 'apollo-server'

import models from './models'
import resolvers from './graphql/resolvers'
import typeDefs from './graphql/types'
import { $server } from '../config'
