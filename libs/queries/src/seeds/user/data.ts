import { PartialType } from '@nestjs/swagger'
import { User } from '@app/queries/entities'

export class InsertUserDto extends PartialType(User) {}
/**
 * nguyenanhphuong -> $2b$10$3yYeZVzDXppp38l4zlOCcuksypveFsUhqLNxoVMats9WrlsjmVCLy
 * nguyenkien -> $2b$10$YiXVxvtcscz0ZEP0MSER/uvkjg1Z2178sD4akfNm70C8h.ltFwUHi
 *
 */
export const userData: InsertUserDto[] = [
    {
        name: 'phuong',
        email: 'phuong@gmail.com',
        address: 'Yên Phong - Bắc Ninh',
        password:
            '$2b$10$mXJjq06GdSpuHt6TOzfhTOZOlTb50DJ4xjP7uwET4vFQ5rNvHLmly',
        phone: '372109881',
        // avatar: "https://static1.bestie.vn/Mlog/ImageContent/201909/dau-hieu-cua-nguoi-chua-truong-thanh-de-avatar-den-khi-that-tinh-5f32ad.jpg",
        roleId: 1,
    },
    {
        name: 'kien',
        email: 'nguyenkien123ns@gmail.com',
        address: 'Yên Phong - Bắc Ninh',
        password:
            '$2b$10$pDa1qETnhA5NDLg0GiKMu.2Zdh10k6clOYIMdkyFuCMdy9dkuRqNG',
        phone: '372109881',
        // avatar: "https://static1.bestie.vn/Mlog/ImageContent/201909/dau-hieu-cua-nguoi-chua-truong-thanh-de-avatar-den-khi-that-tinh-5f32ad.jpg",
        roleId: 1,
    },
]
