import { Global, Module } from "@nestjs/common"
import { TypeOrmExModule } from "@app/shares"
import {
    CommentRepository,
    EvalutionRepository,
    ImageRepository,
    LaptopRepository,
    OrderDetailRepository,
    OrderRepository,
    RoleRepository,
    UserRepository,
} from "@app/queries/repositories"

const commonRepositories = [
    CommentRepository,
    EvalutionRepository,
    ImageRepository,
    LaptopRepository,
    OrderRepository,
    OrderDetailRepository,
    RoleRepository,
    UserRepository,
]
@Global()
@Module({
    imports: [TypeOrmExModule.forCustomRepository(commonRepositories)],
    exports: [TypeOrmExModule],
})
export class GlobalRepository {}
