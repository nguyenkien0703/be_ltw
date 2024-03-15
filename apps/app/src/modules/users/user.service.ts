import { Injectable } from "@nestjs/common"
import { UserRepository } from "@app/queries"
import { User } from "@app/queries/entities/user.entity"
@Injectable()
export class UserService {
    constructor(private readonly userRepository: UserRepository) {}

    async findUserByEmail(email: string): Promise<User> {
        const user = await this.userRepository.findOne({
            where: {
                email: email,
            },
        })
        return user
    }
}
