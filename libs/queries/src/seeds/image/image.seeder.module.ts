import { Module } from "@nestjs/common"
import { ImageSeederService } from "@app/queries/seeds/image/image.seeder.service"
import { TypeOrmExModule } from "@app/shares"
import { ImageRepository } from "@app/queries/repositories"

const repositories = TypeOrmExModule.forCustomRepository([ImageRepository])
@Module({
    imports: [repositories],
    providers: [ImageSeederService],
    exports: [ImageSeederService],
})
export class ImageSeederModule {}
