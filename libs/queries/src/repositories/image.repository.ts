import { Repository } from "typeorm"
import { Image } from "@app/queries/entities"
import { CustomRepository } from "@app/shares"

@CustomRepository(Image)
export class ImageRepository extends Repository<Image> {}
