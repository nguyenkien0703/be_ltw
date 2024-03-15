import {
    BaseEntity,
    Column,
    Entity,
    JoinColumn,
    ManyToOne,
    PrimaryGeneratedColumn,
} from "typeorm"
import { Laptop } from "@app/queries/entities/laptop.entity"

@Entity("images")
export class Image extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number
    @Column({
        name: "url_image",
        type: "varchar",
        length: 255,
        nullable: true,
        unique: false,
    })
    urlImage: string

    @Column({ nullable: false, name: "laptop_id", type: "integer", width: 11 })
    laptopId: number

    @ManyToOne(() => Laptop)
    @JoinColumn({
        name: "laptop_id",
    })
    laptop: Laptop
}
