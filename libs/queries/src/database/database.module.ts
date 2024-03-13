import { Module } from "@nestjs/common"
import { TypeOrmModule } from "@nestjs/typeorm"
import { ConfigModule, ConfigService } from "@nestjs/config"
import {
    Comment,
    Evalution,
    Image,
    Laptop,
    Order,
    OrderDetail,
    Role,
    User,
} from "@app/queries/entities"

@Module({
    imports: [
        TypeOrmModule.forRootAsync({
            imports: [ConfigModule],
            useFactory: (configService: ConfigService) => {
                return {
                    type: "mysql",
                    host: configService.get("database.host"),
                    port: +configService.get("database.port"),
                    username: configService.get("database.user"),
                    password: configService.get("database.pass"),
                    database: configService.get("database.name"),
                    entities: [
                        Comment,
                        Evalution,
                        Image,
                        Laptop,
                        Order,
                        OrderDetail,
                        Role,
                        User,
                    ],
                    timezone: "Z",
                    synchronize: configService.get("database.synchronize"),
                    debug: false,
                    logging: configService.get("database.logging"),
                }
            },
            inject: [ConfigService],
        }),
    ],
})
export class DatabaseModule {}
