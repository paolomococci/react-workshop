import { encrypt } from '@contentpi/lib'
import { IUser, IDataTypes } from '../types'

export default (
  sequelize: any,
  DataTypes: IDataTypes
): IUser => {
  const User = sequelize.define(
    User, {
      id: {},
      username: {},
      password: {},
      email: {},
      privilege: {},
      active: {}
    },
    {
      hooks: {}
    }
  )
  return User
}
