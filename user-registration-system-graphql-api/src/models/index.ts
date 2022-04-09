import { Sequelize } from 'sequelize'
const { $db } = require('../../config')
import { IModels } from '../types'

const { 
  dialect, 
  port, 
  host, 
  database, 
  username, 
  password 
} = $db

const uri = `${dialect}://${username}:${password}@${host}:${port}/${database}`

const sequelize = new Sequelize(uri)

const models: IModels = {
  User: require('./User').default(sequelize, Sequelize), 
  sequelize
}

export default models
