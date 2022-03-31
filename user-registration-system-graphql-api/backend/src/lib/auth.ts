import { AuthenticationError } from 'apollo-server'
import { encrypt, isPasswordMatch } from '@contentpi/lib'
import { IUser, IModels, IAuthPayload } from '../types'
import { createToken } from './jwt'