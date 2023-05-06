import { expressjwt as jwt, GetVerificationKey } from 'express-jwt'
import type { Request } from 'express'
import type { ParamsDictionary } from 'express-serve-static-core'
import type { JwtPayload } from 'jsonwebtoken'
import jwks from 'jwks-rsa'

const domain = 'https://dev-ty7ee0rngw3ifoyu.us.auth0.com'
const audience = 'https://sarah-lewis.netlify.app/admin'

const checkJwt = jwt({
  secret: jwks.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: `${domain}/.well-known/jwks.json`,
  }) as GetVerificationKey,
  audience: audience,
  issuer: `${domain}/`,
  algorithms: ['RS256'],
})

export default checkJwt

export interface JwtRequest<TReq = any, TRes = any>
  extends Request<ParamsDictionary, TRes, TReq> {
  auth?: JwtPayload
}
