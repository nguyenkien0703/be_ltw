import { Module } from "@nestjs/common"
import { UserService } from "./user.service"
import { RoleModule } from "../roles/role.module"

@Module({
    imports: [RoleModule],
    controllers: [],
    providers: [UserService],
    exports: [UserService],
})
export class UserModule {}
