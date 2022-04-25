import path from 'path'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import session from 'express-session'
import express, {
  NextFunction,
  Request,
  Response
} from 'express'

import {
  isConnected
} from './lib/middlewares/user'

import config from './config'

const app = express()
const port = process.env.NODE_PORT || 3000
const DIST_DIR = path.join(__dirname, '../dist')
const HTML_FILE = path.join(DIST_DIR, 'index.html')

app.use(express.static(DIST_DIR))

app.use(
  session(
    {
      resave: false,
      saveUninitialized: true,
      secret: config.security.secretKey
    }
  )
)

app.use(
  express.json()
)

app.use(
  express.urlencoded(
    {
      extended: true
    }
  )
)

app.use(
  cookieParser(config.security.secretKey)
)

app.use(
  cors(
    {
      credentials: true,
      origin: true
    }
  )
)

app.get(
  '/dashboard',
  isConnected(
    true,
    [
      'admin',
      'normal'
    ],
    `/login?redirectTo=/dashboard`
  ),
  (
    request: Request,
    response: Response,
    next: NextFunction
  ) => {
    next()
  }
)

app.get(
  '/login',
  isConnected(false),
  (
    request: Request,
    response: Response,
    next: NextFunction
  ) => {
    next()
  }
)

app.get(
  `/logout`,
  (
    request: Request,
    response: Response
  ) => {
    response.clearCookie('at')
    response.redirect('/')
  }
)

app.get(
  '*',
  (
    request: Request,
    response: Response
  ) => {
    response.sendFile(HTML_FILE)
  }
)

app.listen(
  port,
  () => console.log(`at work on http://localhost:${port}`)
)
