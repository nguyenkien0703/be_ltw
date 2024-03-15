import { Repository } from "typeorm"
import { Evalution } from "@app/queries/entities"
import { CustomRepository } from "@app/shares"

@CustomRepository(Evalution)
export class EvalutionRepository extends Repository<Evalution> {}
