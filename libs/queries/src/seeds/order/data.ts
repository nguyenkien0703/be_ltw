import { PartialType } from "@nestjs/swagger"
import { Order } from "@app/queries/entities"

export class InsertOrderDto extends PartialType(Order) {}

export const orderData: InsertOrderDto[] = [
    {
        userId: 1,
        status: 0,
        address: "Quốc Oai - Hà Nội",
        name: "Nguyễn Danh Nhân",
        phone: "3669916015",
    },
    {
        userId: 2,
        status: 0,
        address: "Tiên Du - Bắc Ninh",
        name: "Nguyễn Trung Anh",
        phone: "987654321",
    },
    {
        userId: 1,
        status: 1,
        address: "Quế Võ - Bắc Ninh",
        name: "Trương Thị Ngọc",
        phone: "337478888",
    },
    {
        userId: 1,
        status: 0,
        address: "Phủ Lý - Hà Nam",
        name: "Nguyễn Văn Quân",
        phone: "339792000",
    },
]
