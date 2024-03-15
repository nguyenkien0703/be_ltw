import { Injectable, Logger } from "@nestjs/common"
import { ImageRepository } from "@app/queries/repositories"
import {
    evalutionData,
    InsertEvalutionDto,
} from "@app/queries/seeds/evalution/data"
import { Evalution, Image } from "@app/queries/entities"
import { imageData, InsertImageDto } from "@app/queries/seeds/image/data"

@Injectable()
export class ImageSeederService {
    constructor(private readonly imageRepository: ImageRepository) {}
    async saveOneImage(image: InsertImageDto): Promise<Image> {
        const createImage = await this.imageRepository.create(image)
        await createImage.save()
        Logger.log("image________insertd__image_id: " + createImage.id)
        return createImage
    }
    async seedImage() {
        const savePromises = imageData.map((image) => this.saveOneImage(image))
        Logger.debug("image_______start_seeding____")
        await Promise.all(savePromises)
        Logger.debug("image_______end_seeding____")
    }
}
