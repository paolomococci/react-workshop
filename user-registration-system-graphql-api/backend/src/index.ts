import { ApolloServer } from 'apollo-server'
import { makeExecutableSchema } from '@graphql-tools/schema'
import { $server } from '../config'
import models from './models'
import resolvers from './graphql/resolvers'
import typeDefs from './graphql/types'

const alter = true
const force = false

const schema = makeExecutableSchema({ typeDefs, resolvers })

const apolloServer = new ApolloServer({ schema, context: { models }})

models.sequelize.sync({ alter, force }).then(() => {
  apolloServer.listen($server.port).then(({ url }) => { 
    console.log(`Running on ${url}`)
   })
})
