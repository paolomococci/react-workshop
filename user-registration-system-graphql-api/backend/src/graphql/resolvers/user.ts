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
  Mutation: {}
}
