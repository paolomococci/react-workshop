import dotenv from 'dotenv'
import config from './config.json'

dotenv.config()

type Db = {}

type Security = {}

type Server = {}

const {
  DB_DIALECT = '',
  DB_PORT = '',
  DB_HOST = '',
  DB_DATABASE = '',
  DB_USERNAME = '',
  DB_PASSWORD = '',
} = process.env

const db: Db = {}

const {
  security, server
} = config

