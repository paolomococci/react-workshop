import { User, Sequelize } from './types'

export interface IDataTypes {}

export interface IUser extends User, Sequelize {}

export interface ICreateUserInput extends User {}

export interface ILoginInput {}

export interface IAuthPayload {}

export interface IModels {}
