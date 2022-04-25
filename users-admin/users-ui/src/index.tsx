import ReactDOM from 'react-dom'
import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache
} from '@apollo/client'

import AppRoutes from './AppRoutes'
import config from './config'

const client = new ApolloClient(
  {
    uri: config.apiUrl,
    cache: new InMemoryCache()
  }
)

ReactDOM.render(
  <ApolloProvider client={client}><AppRoutes /></ApolloProvider>,
  document.querySelector('#root')
)
