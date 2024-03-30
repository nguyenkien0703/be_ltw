import {
    Body,
    Controller,
    HttpCode,
    HttpStatus,
    Post,
    UseGuards,
} from "@nestjs/common"
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger"
import { OrderService } from "./order.service"
import { JwtAuthGuard } from "@app/shares/guards/jwt-auth.guard"
import { CreateOrderDto } from "@app/queries/dtos/order.dto"
import { UserScope } from "@app/shares/decorators/user.decorator"
import { User } from "@app/queries"

@Controller("orders")
@ApiTags("orders")
export class OrderController {
    constructor(private readonly orderService: OrderService) {}

    @Post("")
    @ApiBearerAuth()
    @UseGuards(JwtAuthGuard)
    @HttpCode(HttpStatus.CREATED)
    async createOrder(
        @Body() createOrderDto: CreateOrderDto,
        @UserScope() user: User,
    ) {
        const userId = user?.id
        const createdOrder = await this.orderService.createOrder(
            userId,
            createOrderDto,
        )
        return createdOrder
    }
}
