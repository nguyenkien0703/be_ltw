import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common'
import { ApiTags } from '@nestjs/swagger'
import { AuthService } from './auth.service'
import {
    LoginUserByPassword,
    RefreshTokenDto,
    SignUpUserDto,
} from '@app/queries/dtos'

@Controller('auths')
@ApiTags('auths')
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    //LoginUser By Email-Password
    @Post('login')
    @HttpCode(HttpStatus.OK)
    async loginUserByPassword(@Body() loginByPassword: LoginUserByPassword) {
        const loginData =
            await this.authService.loginUserByPassword(loginByPassword)
        return loginData
    }

    // signup
    @Post('sign-up')
    @HttpCode(HttpStatus.CREATED)
    async signUpUser(@Body() signUpUserDto: SignUpUserDto) {
        const signUpedUser = await this.authService.signUpUser(signUpUserDto)
        return signUpedUser
    }

    @Post('/refresh-token')
    @HttpCode(HttpStatus.CREATED)
    async generateNewAccessJWT(@Body() refreshTokenDto: RefreshTokenDto) {
        const newAccessToken =
            await this.authService.generateNewAccessJWT(refreshTokenDto)
        return newAccessToken
    }
}
