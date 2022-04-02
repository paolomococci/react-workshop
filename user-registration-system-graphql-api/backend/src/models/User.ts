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

      },
      password: {

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
