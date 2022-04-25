import {
  FC,
  createContext,
  ReactElement,
  useState,
  useEffect
} from 'react'
import {
  useCookies
} from 'react-cookie'
import {
  getGraphQlError,
  redirectTo,
  getDebug
} from '@contentpi/lib'
import {
  useQuery,
  useMutation
} from '@apollo/client'

import LOGIN_MUTATION from '../graphql/user/login.mutation'

import GET_USER_DATA_QUERY from '../graphql/user/getUserData.query'

/* interfaces */
interface IUserContext {
  login(input: any): any
  connectedUser: any
}

interface IProps {
  page?: string
  children: ReactElement
}

/* contexts */
export const UserContext = createContext<IUserContext>({
  login: () => null,
  connectedUser: null
})

const UserProvider: FC<IProps> = ({ page = '', children }): ReactElement => {
  const [cookies, setCookie] = useCookies()
  const [connectedUser, setConnectedUser] = useState(null)

  const [loginMutation] = useMutation(LOGIN_MUTATION)

  const {
     data: dataUser
  } = useQuery(GET_USER_DATA_QUERY, {
    variables: {
      at: cookies.at || ''
    }
  })

  useEffect(() => {
    if (dataUser) {
      /* invalid session */
      if (!dataUser.getUserData.id && page !== 'login') {
        redirectTo('/login?redirectTo=/dashboard', false)
      } else {
        setConnectedUser(dataUser.getUserData)
      }
    }
  }, [dataUser, page])

  async function login(
    input: {
      email: string;
      password: string
    }
  ): Promise<any> {
    try {
      const {
        data: dataLogin
      } = await loginMutation({
        variables: {
          email: input.email,
          password: input.password
        }
      })

      if (dataLogin) {
        /* if login success */
        setCookie(
          'at',
          dataLogin.login.token,
          {
            path: '/'
          }
        )

        return dataLogin.login.token
      }
    } catch (err) {
      return getGraphQlError(err)
    }
  }

  const context = {
    login,
    connectedUser
  }

  return <UserContext.Provider value={context}>{children}</UserContext.Provider>
}

export default UserProvider
