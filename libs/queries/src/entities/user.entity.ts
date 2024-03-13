import {
    BaseEntity,
    Column,
    Entity,
    JoinColumn,
    ManyToOne,
    OneToMany,
    PrimaryGeneratedColumn,
} from "typeorm"
import { RoleEnum } from "@app/shares/constants"
import { Role } from "./role.entity"

@Entity("users")
export class User extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column({
        name: "email",
        type: "varchar",
        length: 255,
        nullable: true,
        unique: true,
    })
    email: string

    @Column({ name: "password", type: "varchar", length: 255, nullable: true })
    password: string

    @Column({
        name: "name",
        type: "varchar",
        length: 255,
        nullable: false,
    })
    name: string

    @Column({
        name: "address",
        type: "text",
        nullable: true,
    })
    address: string

    @Column({
        nullable: true,
        name: "phone",
        type: "varchar",
        length: 255,
    })
    phone: string

    @Column({
        nullable: true,
        type: "varchar",
        length: 255,
        name: 'defaultHash'
    })
    defaultAvatarHashColor: string

    @Column({ name: "avartar", type: "varchar", length: 255, nullable: true })
    avatar: string


    @Column({ nullable: false, name: "status", type: "integer", width: 11 })
    statusId: number



    @Column({ nullable: false, name: "role_id", type: "integer", width: 11 })
    roleId: number

    @ManyToOne(()=> Role)
    @JoinColumn({
        name: "role_id",        
    })
    role: Role

}
