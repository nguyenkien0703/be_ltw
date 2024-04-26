import { PartialType } from '@nestjs/swagger'
import { User } from '@app/queries/entities'

export class InsertUserDto extends PartialType(User) {}
/**
 * nguyenanhphuong -> $2b$10$do3KSJn4s2IhR1QnezOzvuQOIlvxM.Jzi3lh.znC8k7lcGhCiJgnC
 * nguyenkien -> $2b$10$cLTMRdBksRQpC92mkZ.6Hu7Bw.0XhDGN9DlqPpAUfIvcNKFdvyVcW
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
