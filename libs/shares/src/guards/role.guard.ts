import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common'
import { Reflector } from '@nestjs/core'
import { RoleEnum } from '@app/shares'
import { ROLES_KEY } from '@app/shares/decorators/role.decorator'

@Injectable()
export class RoleGuard implements CanActivate {
    constructor(private reflector: Reflector) {}
    canActivate(context: ExecutionContext): boolean {
        const requiredRoles = this.reflector.getAllAndOverride<RoleEnum[]>(
            ROLES_KEY,
            [context.getHandler(), context.getClass()],
        )
        if (!requiredRoles) {
            return true
        }
        const user = context.switchToHttp().getRequest().user
        console.log(user)
        return requiredRoles.some((role) => user.role === role)
    }
}
