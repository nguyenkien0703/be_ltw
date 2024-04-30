import { HttpException, HttpStatus, Injectable } from '@nestjs/common'
import {
    LoginUserByPassword,
    RefreshTokenDto,
    SignUpUserDto,
} from '@app/queries/dtos'
import { GenerateAccessJWTData, LoginResponseData } from './auth.interface'
import { UserService } from '../users/user.service'
import { httpErrors } from '@app/shares/exeption-filter'
import { comparePasswordUser, hashPassword } from '@app/shares/utils/bcrypt'
import { User } from '@app/queries/entities/user.entity'
import {
    generateAccessJWT,
    generateRefreshTokenJWT,
    verifyRefreshJWT,
} from '@app/shares/utils/jwt'
import { ConfigService } from '@nestjs/config'

@Injectable()
export class AuthService {
    constructor(
        private readonly userService: UserService,

        private readonly configService: ConfigService,
    ) {}

    async loginUserByPassword(
        loginByPassword: LoginUserByPassword,
    ): Promise<LoginResponseData> {
        const { email, password } = loginByPassword
        const user = await this.userService.findUserByEmail(email)
        if (!user) {
            throw new HttpException(
                httpErrors.USER_NOT_FOUND,
                HttpStatus.NOT_FOUND,
            )
        }
        // console.log(email, '---', password)
        // console.log('user.password---',user.password)
        // console.log('await hashPassword(password)---',await hashPassword("nguyenkien"))
        const checkPassword = await comparePasswordUser(password, user.password)
        if (!checkPassword) {
            throw new HttpException(
                httpErrors.USER_INVALID_PASSWORD,
                HttpStatus.FORBIDDEN,
            )
        }
        const { userData, accessToken, refreshToken } =
            await this.generateResponseLoginData(user)
        return {
            userData,
            accessToken,
            refreshToken,
        }
    }
    async generateResponseLoginData(user: User): Promise<LoginResponseData> {
        let accessToken
        let refreshToken
        let userData

        try {
            userData = {
                id: user.id,
                email: user.email,
                name: user.name,
                address: user.address,
                role: user.role.roleName,
            }

            accessToken = generateAccessJWT(userData, {
                expiresIn: Number(
                    this.configService.get('api.accessTokenExpireInSec'),
                ),
            })

            refreshToken = generateRefreshTokenJWT(userData, {
                expiresIn: Number(
                    this.configService.get('api.refreshTokenExpireInSec'),
                ),
            })
        } catch (error) {
            throw new HttpException(
                {
                    message: error.message,
                },
                HttpStatus.INTERNAL_SERVER_ERROR,
            )
        }

        return {
            userData,
            accessToken,
            refreshToken,
        }
    }
    async generateNewAccessJWT(
        refreshTokenDto: RefreshTokenDto,
    ): Promise<GenerateAccessJWTData> {
        const refreshToken = refreshTokenDto.refreshToken
        let payload
        try {
            payload = await verifyRefreshJWT(refreshToken)
        } catch (error) {
            throw new HttpException(
                {
                    message: error.message,
                },
                HttpStatus.UNAUTHORIZED,
            )
        }
        const accessToken = generateAccessJWT(payload)
        return accessToken
    }

    async signUpUser(signUpUserDto: SignUpUserDto) {
        const signUpedUser = await this.userService.signUpUser(signUpUserDto)
        return signUpedUser
    }
}
