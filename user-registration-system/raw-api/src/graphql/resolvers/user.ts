import {
  getUserData
 } from '../../lib/jwt'

import {
  IUser,
  ICreateUserInput,
  IModels,
  ILoginInput,
  IAuthPayload
} from '../../types'

import {
  doLogin,
  getUserBy
} from '../../lib/auth'

export default {
  Query: {
    getUsers: (
      _: any,
      args: any,
      context: {
        models: IModels
      }
    ): IUser[] => models.User.findAll(),
    getUserData: () => {}
  },
  Mutation: {
    createUser: () => {},
    login: () => {}
  }
}
