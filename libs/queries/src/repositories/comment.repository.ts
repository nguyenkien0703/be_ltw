import { Repository } from "typeorm"
import { Comment } from "@app/queries/entities"
import { CustomRepository } from "@app/shares"
import { CreateCommentDto } from "@app/queries/dtos"
import { Pagination, paginate } from "nestjs-typeorm-paginate"

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



    async getAllCommentLaptopByLaptopId(laptopId: number): Promise<Pagination<Comment>> {
        const queryBuilder = this.createQueryBuilder('comments')
        .select([
            'comments.id',
            'comments.content',
            'comments.userId',
            'comments.laptopId',

        ])   .where('comments.laptopId = :laptopId',{
            laptopId: laptopId
        })
        return paginate(queryBuilder, {page: 1, limit: 100})
    }
}
