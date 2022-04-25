import {
  FC,
  ReactElement,
  useState,
  ChangeEvent
} from 'react'
import {
  redirectTo
} from '@contentpi/lib'

import { IUser } from '../../types'
import { StyledLogin } from './Login.styled'

interface IProps {
  login(input: any): any
  currentUrl: string
}

const Login: FC<IProps> = (
  {
    login,
    currentUrl
  }
): ReactElement => {
  const [values, setValues] = useState({
    email: '',
    password: ''
  })
  const [errorMessage, setErrorMessage] = useState('')
  const [invalidLogin, setInvalidLogin] = useState(false)

  const onChange = (
    e: ChangeEvent<HTMLInputElement>
  ): any => {
    const {
      target: { name, value }
    } = e

    if (name) {
      setValues(
        (prevValues: any) => (
          {
            ...prevValues,
            [name]: value
          }
        )
      )
    }
  }

  const handleSubmit = async (
    user: IUser
  ): Promise<void> => {
    const response = await login(user)

    if (response.error) {
      setInvalidLogin(true)
      setErrorMessage(response.message)
    } else {
      redirectTo(currentUrl || '/')
    }
  }

  return (
    <>
      <StyledLogin>
        <div className="wrapper">
          {invalidLogin && <div className="alert">{errorMessage}</div>}
          <div className="form">
            <p>
              <input
                autoComplete="off"
                type="email"
                className="email"
                name="email"
                placeholder="Email"
                onChange={onChange}
                value={values.email}
              />
            </p>

            <p>
              <input
                autoComplete="off"
                type="password"
                className="password"
                name="password"
                placeholder="Password"
                onChange={onChange}
                value={values.password}
              />
            </p>

            <div className="actions">
              <button name="login" onClick={(): Promise<void> => handleSubmit(values)}>
                login
              </button>
            </div>
          </div>
        </div>
      </StyledLogin>
    </>
  )
}

export default Login
