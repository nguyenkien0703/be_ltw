import { PartialType } from "@nestjs/swagger"
import { Role } from "@app/queries/entities"

export class InsertRoleDto extends PartialType(Role) {}

export const roleData: InsertRoleDto[] = [
    {
        roleName: "admin",
    },
    {
        roleName: "user",
    },
]
