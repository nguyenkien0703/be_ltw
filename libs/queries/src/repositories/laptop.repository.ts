import { Repository } from "typeorm"
import { CustomRepository } from "@app/shares"
import { Laptop } from "@app/queries/entities"

@CustomRepository(Laptop)
export class LaptopRepository extends Repository<Laptop> {}
