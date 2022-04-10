import dotenv from 'dotenv'
import config from './config.json'

dotenv.config()

type Db = {
  dialect: string
  host: string
  port: string
  database: string
  username: string
  password: string
}

type Security = {
  secretKey: string
  expiresIn: string
}

type Server = {}
