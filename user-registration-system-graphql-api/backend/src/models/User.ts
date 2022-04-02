import { encrypt } from '@contentpi/lib'
import { IUser, IDataTypes } from '../types'

export default (sequelize: any, DataTypes: IDataTypes): IUser => {
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
            msg: 'the username field accepts only alphanumeric characters'
          },
          len: {
            args: [8, 20],
            msg: 'the field username accepts eight to twenty characters'
          }
        }
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false
      },
      email: {

      },
      privilege: {

      },
      active: {

      }
    },
    
  )
}
