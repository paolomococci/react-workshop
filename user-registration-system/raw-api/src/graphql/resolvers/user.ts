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
  getUserById
} from '../../lib/auth'

export default {
  Query: {
    getUsers: (
      _: any,
      args: any,
      {
        models
      }: {
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
      {
        models
      }: {
        models: IModels
      }
    ): Promise<any> => {
      const currentConnectedUser = await getUserData(at)
      if (currentConnectedUser) {
        const user = await getUserById(
          {
            id: currentConnectedUser.id,
            email: currentConnectedUser.email,
            privilege: currentConnectedUser.privilege,
            active: currentConnectedUser.active
          },
          models
        )
        if (user) {
          return currentConnectedUser
        }
      }
      return {
        id: '',
        username: '',
        password: '',
        email: '',
        privilege: '',
        active: false
      }
    }
  },
  Mutation: {
    createUser: (
      _: any,
      {
        input
      }: {
        input: ICreateUserInput
      },
      {
        models
      }: {
        models: IModels
      }
    ): IUser => models.User.create(
      {
        ...input
      }
    ),
    login: (
      _: any,
      {
        input
      }: {
        input: ILoginInput
      },
      {
        models
      }: {
        models: IModels
      }
    ): Promise<IAuthPayload> => doLogin(
      input.email,
      input.password,
      models
    )
  }
}
