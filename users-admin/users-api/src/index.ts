import { ApolloServer, makeExecutableSchema } from 'apollo-server'

import models from './models'
import resolvers from './graphql/resolvers'
import typeDefs from './graphql/types'
import { $server } from '../config'

const alter = true
const force = false

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

models.sequelize.sync(
  {
    alter,
    force
  }
).then(() => {
  apolloServer.listen(
    $server.port
  ).then(
    ({
      url
    }) => {
      console.log(`server at work on ${url}`)
    }
  )
})
