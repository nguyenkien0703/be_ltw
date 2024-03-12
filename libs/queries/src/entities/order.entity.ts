import {
    BaseEntity,
    Column,
    Entity,
    JoinColumn,
    ManyToOne,
    PrimaryGeneratedColumn,
} from "typeorm"
import { User } from "@app/queries/entities/user.entity"

@Entity("orders")
export class Order extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ nullable: false, name: "user_id", type: "integer", width: 11 })
    userId: number

    @ManyToOne(() => User)
    @JoinColumn({
        name: "user_id",
    })
    user: User
}
