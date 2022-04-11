import { AuthenticationError } from 'apollo-server'
import { encrypt, isPasswordMatch } from '@contentpi/lib'
import { IUser, IModels, IAuthPayload } from '../types'
import { createToken } from './jwt'

export const getUserById = async (
  where: any,
  models: IModels
): Promise<IUser> => {
  const user = await models.User.findOne(
    {
      where,
      raw: true,
    }
  )
  return user
}

export const doLogin = async (
  email: string,
  password: string,
  models: IModels
): Promise<IAuthPayload> => {
  const user = await getUserById(
    {
      email
    },
    models
  )
  if (!user) {
    throw new AuthenticationError('invalid credentials')
  }
  const passwordMatch = isPasswordMatch(
    encrypt(password),
    user.password
  )
  const isActive = user.active
  if (!passwordMatch) {
    throw new AuthenticationError('invalid credentials')
  }
  if (!isActive) {
    throw new AuthenticationError('this credentials is not active')
  }
  const [token] = await createToken(user)
  return {
    token
  }
}
