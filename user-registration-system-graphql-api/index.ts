const { onError } = require("apollo-link-error")
const { ApolloServer } = require("apollo-server")
const { makeExecutableSchema } = require("@graphql-tools/schema")

import { $server } from './config'
import models from './src/models'
import resolvers from './src/graphql/resolvers'
import typeDefs from './src/graphql/types'

const link = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    graphQLErrors.forEach(({ message, locations, path }) => console.log(
      `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
    ))
  }
  if (networkError) console.log(`[Network error]: ${networkError}`)
})

const alter = true

// if you intend to make a clean sweep of the data just change the value of the constant "force" to true
const force = false

const schema = makeExecutableSchema({ 
  typeDefs, 
  resolvers
 })

const apolloServer = new ApolloServer({
  schema, 
  context: { models }
})

models.sequelize.sync({ alter, force }).then(() => {
  apolloServer.listen($server.port).then(({ url }) => { 
    console.log(`this application responds to ${url}`)
   })
})
