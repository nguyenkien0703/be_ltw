import { IsEmail, IsNotEmpty, IsString } from "class-validator"
import { ApiProperty } from "@nestjs/swagger"

export class LoginUserByPassword {
    @IsEmail()
    @IsNotEmpty()
    @ApiProperty({
        example: "nguyenkien123ns@gmail.com",
    })
    email: string

    @IsString()
    @IsNotEmpty()
    @ApiProperty({
        example: "nguyenkien",
    })
    password: string
}

export class RefreshTokenDto {
    @IsString()
    @IsNotEmpty()
    @ApiProperty({
        example:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MmNlZGM1ZjFiZTIyY2RiNTkwMjJkNWUiLCJlbWFpbCI6ImFkbWluQGdtYWlsLmNvbSIsImNyZWF0ZWRBdCI6IjIwMjItMDctMTNUMTQ6NTM6MTkuNDg5WiIsInVwZGF0ZWRBdCI6IjIwMjItMDctMTNUMTc6MDM6MTYuMjIyWiIsIl9fdiI6MCwidXNlcm5hbWUiOiJBZHJpZW5OZ3V5ZW4iLCJpZCI6IjYyY2VkYzVmMWJlMjJjZGI1OTAyMmQ1ZSIsImlhdCI6MTY1NzczNTkyOSwiZXhwIjoxNjU3NzM2ODI5fQ.eA4Kf4xw_vMAyZluCtW9mtcg73ylMJmsjacPsEi5CMA",
    })
    refreshToken: string
}