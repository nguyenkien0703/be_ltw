import { Injectable } from '@nestjs/common'
import { MailerService } from '@nestjs-modules/mailer'
import { User } from '@app/queries'
import { LaptopResponseData } from '../laptop/laptop.interface'

@Injectable()
export class EmailService {
    constructor(private readonly mailerService: MailerService) {}

    async sendEmailCreatedOrderSuccessfully(
        user: User,
        laptops: LaptopResponseData[],
        totalAmount: number,
    ) {
        await this.mailerService.sendMail({
            to: user.email,
            subject: 'Create a successful order',
            template: './send-info-create-order',
            context: {
                username: user.name,
                totalAmount: totalAmount,
                // orderedComputers: laptops,
            },
        })
    }
}
