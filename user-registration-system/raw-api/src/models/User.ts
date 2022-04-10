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
      password: {
        type: DataTypes.STRING,
        allowNull: false
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: {
            args: true,
            msg: 'invalid format of this email address'
          }
        }
      },
      privilege: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'user'
      },
      active: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
      }
    },
    {
      hooks: {
        beforeCreate: (user: IUser): void => {
          user.password = encrypt(user.password)
        }
      }
    }
  )
  return User
}
