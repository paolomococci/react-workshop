import { encrypt } from '@contentpi/lib'
import { IUser, IDataTypes } from '../types'

export default (
  sequelize: any,
  DataTypes: IDataTypes
): IUser => {
  const User = sequelize.define(
    'User', {
      id: {
        primaryKey: true,
        allowNull: false,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4()
      },
      username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isAlphanumeric: {
            args: true,
            msg: 'username field just accepts alphanumeric characters'
          },
          len: {
            args: [8, 24],
            msg: 'username field must be from eight to twenty four characters'
          }
        }
      },
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
