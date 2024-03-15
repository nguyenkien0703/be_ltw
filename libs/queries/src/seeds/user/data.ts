import { PartialType } from "@nestjs/swagger"
import { User } from "@app/queries/entities"

export class InsertUserDto extends PartialType(User) {}
export const userData: InsertUserDto[] = [
    {
        name: "phuong1",
        email: "phuong1@gmail.com",
        address: "Yên Phong - Bắc Ninh",
        phone: "372109881",
        avatar: "https://static1.bestie.vn/Mlog/ImageContent/201909/dau-hieu-cua-nguoi-chua-truong-thanh-de-avatar-den-khi-that-tinh-5f32ad.jpg",
        roleId: 1,
        statusId: 0,
    },
    {
        name: "kien",
        email: "nguyenkien123ns@gmail.com",
        address: "Yên Phong - Bắc Ninh",
        phone: "372109881",
        avatar: "https://static1.bestie.vn/Mlog/ImageContent/201909/dau-hieu-cua-nguoi-chua-truong-thanh-de-avatar-den-khi-that-tinh-5f32ad.jpg",
        roleId: 1,
        statusId: 0,
    },
]
