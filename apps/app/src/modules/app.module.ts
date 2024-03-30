import { Module } from "@nestjs/common"
import { AppController } from "./app.controller"
import { AppService } from "./app.service"
import { ConfigModule } from "@nestjs/config"
import configuration from "@app/shares/config/configuration"
import { DatabaseModule } from "@app/queries/database/database.module"
import { GlobalRepository } from "./global-repositories/globla-repository.module"

@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
            load: [configuration],
        }),
        DatabaseModule,
        GlobalRepository
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
