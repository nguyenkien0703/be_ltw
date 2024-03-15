// import { Body, Controller, HttpCode, HttpStatus, Post } from "@nestjs/common";
// import { ApiTags } from "@nestjs/swagger";

// @Controller('auths')
// @ApiTags('auths')
// export class AuthController {
//   constructor(private readonly authService: AuthService) {}

//     //LoginUser By Email-Password
//     @Post('login-by-password')
//     @HttpCode(HttpStatus.OK)
//     async loginUserByPassword(@Body() loginByPassword: LoginUserByPassword) {
//         const loginData = await this.authService.loginUserByPassword(
//             loginByPassword,
//         )
//         return loginData
//     }

//     @Post('/user/refresh-token')
//     @HttpCode(HttpStatus.CREATED)
//     async generateNewAccessJWT(@Body() refreshTokenDto: RefreshTokenDto) {
//         const newAccessToken = await this.authService.generateNewAccessJWT(
//             refreshTokenDto,
//         )
//         return newAccessToken
//     }

// }
