const dotenv = require("dotenv")
const config = require("./config.json")

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

type Server = {
  port: number
}

const {
  DB_DIALECT = '',
  DB_PORT = '',
  DB_HOST = '',
  DB_DATABASE = '',
  DB_USERNAME = '',
  DB_PASSWORD = '',
} = process.env

const db: Db = {
  dialect: DB_DIALECT,
  port: DB_PORT,
  host: DB_HOST,
  database: DB_DATABASE,
  username: DB_USERNAME,
  password: DB_PASSWORD
}

const {
  security, 
  server
} = config

const $db: Db = db
const $security: Security = security
var $server: Server = server

module.exports = {
  $db, $security, $server
}
