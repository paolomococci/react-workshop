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
    getUserData: async (
      _: any,
      {
        at
      }: {
        at: string
      },
      context: {
        models: IModels
      }
    ): Promise<any> => {
      const currentConnectedUser = await getUserData(at)
    }
  },
  Mutation: {
    createUser: () => {},
    login: () => {}
  }
}
