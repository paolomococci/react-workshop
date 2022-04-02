import jwt from 'jsonwebtoken'
import { encrypt, setBase64, getBase64 } from '@contentpi/lib'
import { $security } from '../../config'
import { IUser } from '../types'
import jwt from 'jsonwebtoken'
import { encrypt, setBase64, getBase64 } from '@contentpi/lib'
import { $security } from '../../config'
import { IUser } from '../types'

const { secretKey } = $security

export function jwtVerify(accessToken: string, cb: any): void {
  jwt.verify(
    accessToken,
    secretKey,
    (error: any, accessTokenData: any = {}) => {
      const { data: user } = accessTokenData
      if (error || !user) {
        return cb(false)
      }
      const userData = getBase64(user)
      return cb(userData)
    }
  )
}

export async function getUserData(accessToken: string): Promise<any> {
  const UserPromise = new Promise(resolve =>
    jwtVerify(accessToken, (user: any) => 
    resolve(user)
    )
  )
  const user = await UserPromise
  return user
}

export const createToken = async (user: IUser): Promise<string[]> => {

}
