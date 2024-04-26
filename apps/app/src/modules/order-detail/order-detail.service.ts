import { Injectable } from '@nestjs/common'
import { OrderDetail, OrderDetailRepository } from '@app/queries'
import { LaptopDto } from '@app/queries/dtos'

@Injectable()
export class OrderDetailService {
    constructor(
        private readonly orderDetailRepository: OrderDetailRepository,
    ) {}

    async createOrderDetail(
        orderId: number,
        userId: number,
        laptopDto: LaptopDto,
    ): Promise<OrderDetail> {
        const orderDetail = await this.orderDetailRepository.createOrderDetail(
            orderId,
            userId,
            laptopDto,
        )
        return orderDetail
    }
}
