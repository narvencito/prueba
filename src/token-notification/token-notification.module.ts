import { Module } from '@nestjs/common';
import { TokenNotificationService } from './token-notification.service';
import { TokenNotificationController } from './token-notification.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TokenNotification } from './entity/tokenNotification.entity';
import { Customer } from 'src/customer/entity/customer.entity';
import { Supplier } from 'src/supplier/entity/supplier.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TokenNotification, Customer, Supplier])],
  providers: [TokenNotificationService],
  controllers: [TokenNotificationController]
})
export class TokenNotificationModule {}
