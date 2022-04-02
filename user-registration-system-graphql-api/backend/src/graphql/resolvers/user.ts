import { getUserData } from '../../lib/jwt'
import { doLogin, getUserBy } from '../../lib/auth'
import { IUser, ICreateUserInput, IModels, ILoginInput, IAuthPayload } from '../../types'

export default {
  Query: {
    getUsers: (
      _: any, args: any, { models }: { models: IModels }
    ): IUser[] => models.User.findAll(),
    getUserData: async (
      _: any,
      { at }: { at: string },
      { models }: { models: IModels }
    ): Promise<any> => {

    }
  },
  Mutation: {
    createUser: (
      _: any,
      { input }: { input: ICreateUserInput },
      { models }: { models: IModels }
    ): IUser => models.User.create({ ...input }),
    login: (
      _: any,
      { input }: { input: ILoginInput },
      { models }: { models: IModels }
    ): Promise<IAuthPayload> => doLogin(input.email, input.password, models)
  }
}
