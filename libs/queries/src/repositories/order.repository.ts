import { Repository } from "typeorm"
import { CustomRepository } from "@app/shares"
import { Order } from "@app/queries/entities"
@CustomRepository(Order)
export class OrderRepository extends Repository<Order> {}
