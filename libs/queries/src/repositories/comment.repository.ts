import { Repository } from "typeorm"
import { Comment } from "@app/queries/entities"
import { CustomRepository } from "@app/shares"

@CustomRepository(Comment)
export class CommentRepository extends Repository<Comment> {}
