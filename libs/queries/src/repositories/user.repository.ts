import { Repository } from "typeorm"
import { CustomRepository } from "@app/shares"
import { User } from "@app/queries/entities"

@CustomRepository(User)
export class UserRepository extends Repository<User> {}
