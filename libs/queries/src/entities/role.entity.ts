import {
    BaseEntity,
    Column,
    CreateDateColumn,
    Entity,
    OneToMany,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from "typeorm"

@Entity("roles")
export class Role extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column({
        name: "role",
        type: "varchar",
        length: 255,
        nullable: false,
    })
    roleName: string

    @Column({
        name: "description",
        type: "varchar",
        length: 255,
        nullable: true,
    })
    description: string

    @CreateDateColumn({ name: "created_at" })
    createdAt: Date

    @UpdateDateColumn({ name: "updated_at" })
    updatedAt: Date

}
