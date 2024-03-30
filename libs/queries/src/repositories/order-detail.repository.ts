import { Repository } from "typeorm"
import { OrderDetail } from "@app/queries/entities"
import { CustomRepository } from "@app/shares"
import { LaptopDto } from "@app/queries/dtos"

@CustomRepository(OrderDetail)
export class OrderDetailRepository extends Repository<OrderDetail> {
    async createOrderDetail(
        orderId: number,
        userId: number,
        laptopDto: LaptopDto,
    ): Promise<OrderDetail> {
        const { laptopId, quantity } = laptopDto
        const orderDetail = await this.create({
            laptopId: laptopId,
            quantity: quantity,
            userId: userId,
            orderId: orderId,
        })
        await orderDetail.save()
        return orderDetail
    }
}
