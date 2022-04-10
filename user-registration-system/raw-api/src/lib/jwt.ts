import jwt from 'jsonwebtoken'
import { encrypt, setBase64, getBase64 } from '@contentpi/lib'
import { $security } from '../../config'
import { IUser } from '../types'

const { secretKey } = $security

export function jwtVerify(
  accessToken: string,
  cb: any
): void {}

export async function getUserData(
  accessToken: string
) Promise<any> {}

export const createToken = async (user: IUser): Promise<string[]> => {}
