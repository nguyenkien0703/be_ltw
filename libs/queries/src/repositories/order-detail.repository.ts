import { Repository } from "typeorm"
import { OrderDetail } from "@app/queries/entities"
import { CustomRepository } from "@app/shares"

@CustomRepository(OrderDetail)
export class OrderDetailRepository extends Repository<OrderDetail> {}
