import {
    CanActivate,
    ExecutionContext,
    HttpException,
    HttpStatus,
    Injectable,
} from "@nestjs/common"
import { raw } from "express"
import { verifyAccessJWT, verifyRefreshJWT } from "@app/shares/utils/jwt"

@Injectable()
export class JwtAuthGuard implements CanActivate {
    async canActivate(context: ExecutionContext): Promise<boolean> {
        try {
            // console.log("context lien 9----", context)
            const request = context.switchToHttp().getRequest()
            // console.log("request line 11-----", request)
            const bearerHeader = request.headers.authorization
            if (!bearerHeader) {
                throw new HttpException(
                    {
                        message: "Unauthorized",
                    },
                    HttpStatus.UNAUTHORIZED,
                )
            }
            const bearer = bearerHeader.split(" ")
            const token = bearer[1]
            const payload = await verifyAccessJWT(token)
            if (payload) {
                request.user = payload

                return true
            }
            return false
        } catch (error) {
            throw new HttpException(
                {
                    message: error.message,
                },
                HttpStatus.UNAUTHORIZED,
            )
        }
    }
}
