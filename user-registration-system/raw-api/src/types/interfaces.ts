import { User, Sequelize } from './types'

/* User */
export interface IUser extends User, Sequelize {
  id: string
  token?: string
  createdAt?: Date
  updatedAt?: date
}
