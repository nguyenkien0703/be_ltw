interface Configuration {
    database: {
        host: string
        port: number
        name: string
        user: string
        pass: string
        type: string
        logging: boolean
        synchronize: boolean
    }
    api: {
        port: number
        prefix: string
        accessJwtSecretKey: string
        refreshJwtSecretKey: string
        accessTokenExpireInSec: number
        refreshTokenExpireInSec: number
    }
}
export default (): Configuration => ({
    database: {
        host: process.env.DB_HOST || "localhost",
        port: parseInt(process.env.DB_PORT, 10) || 3306,
        name: process.env.DB_NAME || "laptop",
        user: process.env.DB_USER || "root",
        pass: process.env.DB_PASS || "10703223",
        type: process.env.DB_TYPE || "mysql",
        logging: process.env.DB_LOGGING === "true",
        synchronize: process.env.DB_SYNC === "true",
    },
    api: {
        port: parseInt(process.env.API_PORT, 10) || 4000,
        prefix: process.env.API_PREFIX || "api",
        accessJwtSecretKey: process.env.ACCESS_JWT_SECRET_KEY || "",
        refreshJwtSecretKey: process.env.REFRESH_JWT_SECRET_KEY || "",
        accessTokenExpireInSec: parseInt(
            process.env.ACCESS_TOKEN_EXPIRE_IN_SEC,
            10,
        ),
        refreshTokenExpireInSec: parseInt(
            process.env.REFRESH_TOKEN_EXPIRE_IN_SEC,
            10,
        ),
    },
})
