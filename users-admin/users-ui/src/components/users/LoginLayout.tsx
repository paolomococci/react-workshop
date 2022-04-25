import {
  FC,
  ReactElement,
  useContext,
  useEffect
} from 'react'
import {
  redirectTo
} from '@contentpi/lib'

import {
  UserContext
} from '../../contexts/user'

import Login from './Login'

interface IProps {
  currentUrl: string
}

const Layout: FC<IProps> = ({ currentUrl }): ReactElement => {
  const { login } = useContext(UserContext)

  return (
    <Login login={login} currentUrl={currentUrl} />
  )
}

export default Layout
