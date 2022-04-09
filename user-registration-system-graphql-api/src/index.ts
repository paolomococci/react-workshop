import { ApolloServer } from 'apollo-server'
import { makeExecutableSchema } from '@graphql-tools/schema'
import { $server } from '../config'
import models from './models'
import resolvers from './graphql/resolvers'
import typeDefs from './graphql/types'

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
