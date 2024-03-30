import { Repository } from "typeorm"
import { Comment } from "@app/queries/entities"
import { CustomRepository } from "@app/shares"
import { CreateCommentDto } from "@app/queries/dtos"

@CustomRepository(Comment)
export class CommentRepository extends Repository<Comment> {
    async createComment(
        createCommentDto: CreateCommentDto,
        userId: number,
    ): Promise<Comment> {
        const { laptopId, content } = createCommentDto
        const createComment = await this.create({
            userId: userId,
            laptopId: laptopId,
            content: content,
        })
        await createComment.save()
        return createComment
    }
}
