import { AuthenticationError } from 'apollo-server'
import { encrypt, isPasswordMatch } from '@contentpi/lib'
import { IUser, IModels, IAuthPayload } from '../types'
import { createToken } from './jwt'
import { AuthenticationError } from 'apollo-server'
import { encrypt, isPasswordMatch } from '@contentpi/lib'
import { IUser, IModels, IAuthPayload } from '../types'
import { createToken } from './jwt'

export const getUserBy = async (
  where: any, 
  models: IModels
): Promise<IUser> => {}

export const doLogin = async (
  email: string, 
  password: string, 
  models: IModels
): Promise<IAuthPayload> => {}
