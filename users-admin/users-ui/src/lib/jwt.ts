import jwt from 'jsonwebtoken'
import {
  getBase64
} from '@contentpi/lib'

import config from '../config'

const {
  security: {
    secretKey
  }
} = config

export function jwtVerify(
  accessToken: any,
  callback: any
): void {
  jwt.verify(
    accessToken,
    secretKey,
    (
      error: any,
      accessTokenData: any = {}
    ) => {
      const {
        data: user
      } = accessTokenData
      if (error || !user) {
        return callback(false)
      }
      const userData = getBase64(user)
      return callback(userData)
    }
  )
}

export async function getUserData(
  accessToken: any
): Promise<any> {
  const UserPromise = new Promise(
    resolve => jwtVerify(
      accessToken,
      (user: any) => resolve(user)
    )
  )
  const user = await UserPromise
  return user
}
