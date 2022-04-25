import {
  FC,
  ReactElement,
  useContext
} from 'react'

import {
  UserContext
} from '../../contexts/user'
import Dashboard from './Dashboard'

const Layout: FC = (): ReactElement => {
  const { connectedUser } = useContext(UserContext)

  if (connectedUser) {
    return (
      <Dashboard connectedUser={connectedUser} />
    )
  }

  return <div />
}

export default Layout
