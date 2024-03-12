import { Module } from "@nestjs/common"
import { TypeOrmExModule } from "@app/shares"

const commonRepositories = []

@Module({
    imports: [TypeOrmExModule.forCustomRepository(commonRepositories)],
    exports: [TypeOrmExModule],
})
export class GlobalRepository {}
