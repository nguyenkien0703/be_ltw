import {
    BaseEntity,
    Column,
    Entity,
    JoinColumn,
    ManyToOne,
    OneToMany,
    PrimaryGeneratedColumn,
} from "typeorm"
import { RoleEnum, UserStatusEnum } from "@app/shares/constants"
import { UserRole } from "@app/queries/entities/user-role.entity"
import { UserStatus } from "@app/queries/entities/user-status.entity"

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
        name: "note",
        type: "text",
        nullable: true,
    })
    address: string

    @Column({
        nullable: true,
        name: "phone_number",
        type: "varchar",
        length: 255,
    })
    phone: string

    @Column({
        nullable: true,
        type: "varchar",
        length: 255,
    })
    defaultAvatarHashColor: string

    @Column({ name: "avartar", type: "varchar", length: 255, nullable: true })
    avatar: string

    role: RoleEnum

    @Column({ nullable: false, name: "status_id", type: "integer", width: 11 })
    statusId: number

    @ManyToOne(() => UserStatus)
    @JoinColumn({
        name: "status_id",
    })
    userStatus: UserStatus

    @OneToMany(() => UserRole, (userRole) => userRole.user)
    userRole: UserRole[]
}
