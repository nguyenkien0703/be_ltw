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

    @Column({
        name: "address",
        type: "text",
        nullable: true,
    })
    address: string

    @Column({ nullable: false, name: "status", type: "integer", width: 11 })
    status: number

    @Column({
        nullable: true,
        name: "phone",
        type: "varchar",
        length: 255,
    })
    phone: string

    @Column({
        nullable: true,
        name: "name",
        type: "varchar",
        length: 255,
    })
    name: string

    @ManyToOne(() => User)
    @JoinColumn({
        name: "user_id",
    })
    user: User
}
