import { PartialType } from '@nestjs/swagger'
import { Order } from '@app/queries/entities'
import { StatusOrder } from '@app/shares/constants/status-order.const'

export class InsertOrderDto extends PartialType(Order) {}

export const orderData: InsertOrderDto[] = [
    {
        userId: 1,
        status: StatusOrder.PENDING,
        address: 'Quốc Oai - Hà Nội',
        name: 'Nguyễn Danh Nhân',
        phone: '3669916015',
    },
    {
        userId: 2,
        status: StatusOrder.COMPLETED,
        address: 'Tiên Du - Bắc Ninh',
        name: 'Nguyễn Trung Anh',
        phone: '987654321',
    },
    {
        userId: 1,
        status: StatusOrder.PROCESS,
        address: 'Quế Võ - Bắc Ninh',
        name: 'Trương Thị Ngọc',
        phone: '337478888',
    },
    {
        userId: 1,
        status: StatusOrder.PENDING,
        address: 'Phủ Lý - Hà Nam',
        name: 'Nguyễn Văn Quân',
        phone: '339792000',
    },
]
