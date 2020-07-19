import { Module } from '@nestjs/common';
import { PersonService } from './person.service';
import { PersonController } from './person.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Person } from './entity/person.entity';
import { Customer } from 'src/customer/entity/customer.entity';
import { TokenNotification } from 'src/token-notification/entity/tokenNotification.entity';
import { Supplier } from 'src/supplier/entity/supplier.entity';
import { MailerService } from 'src/utils/mailer.service';

@Module({
  imports: [TypeOrmModule.forFeature([Person, Customer, Supplier, TokenNotification])],
  providers: [PersonService, MailerService],
  controllers: [PersonController]
})
export class PersonModule {}
