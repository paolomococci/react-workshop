import {
  FC,
  ReactElement
} from 'react'
import {
  isBrowser
} from '@contentpi/lib'

import LoginLayout from '../components/users/LoginLayout'
import UserProvider from '../contexts/user'

interface IProps {
  currentUrl: string
}

const Page: FC<IProps> = ({
  currentUrl = isBrowser() ? window.location.search.replace('?redirectTo=', '') : ''
}): ReactElement => (
  <UserProvider page="login">
    <LoginLayout currentUrl={currentUrl} />
  </UserProvider>
)

export default Page
