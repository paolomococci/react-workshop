import {
  Request,
  Response,
  NextFunction
} from 'express'

import {
  getUserData
} from '../jwt'

export const isConnected = (
  isLogged = true,
  privileges = ['normal'],
  redirectTo = '/'
) => async (
  request: Request,
  response: Response,
  next: NextFunction
): Promise<void> => {
  /* user information from cookie */
  const user = await getUserData(request.cookies.at)
  if (!user && !isLogged) {
    return next()
  }
  if (user && isLogged) {
    if (privileges.includes('admin') && user.privilege === 'admin') {
      return next()
    }
  }
  if (user && isLogged) {
    if (privileges.includes('normal') && user.privilege === 'normal') {
      return next()
    }
    response.redirect(redirectTo)
  } else {
    response.redirect(redirectTo)
  }
}
