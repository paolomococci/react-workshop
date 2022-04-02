import { Sequelize } from 'sequelize'
import { $db } from '../../config'
import { IModels } from '../types'

const { 
  dialect, 
  port, 
  host, 
  database, 
  username, 
  password 
} = $db
