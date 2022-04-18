import { User, Sequelize } from './types'

/* User */
export interface IUser extends User, Sequelize {
  id: string
  token?: string
  createdAt?: Date
  updatedAt?: Date
}

export interface ICreateUserInput extends User {

}

export interface ILoginInput {
  email: string
  password: string
}

export interface IAuthPayload {
  token: string
}

/* Sequelize */
export interface IDataTypes {
  UUID: string
  UUIDV4(): string
  STRING: string
  BOOLEAN: boolean
  TEXT: string
  INTEGER: number
  DATE: string
  FLOAT: number
}

/* Models */
export interface IModels {
  User: any
  sequelize: any
}
