import { MailerService } from './utils/mailer.service';
import { Module } from '@nestjs/common';
import { CustomerModule } from './customer/customer.module';
import { CategoryModule } from './category/category.module';
import { PersonModule } from './person/person.module';
import { PhotoModule } from './photo/photo.module';
import { ProductModule } from './product/product.module';
import { ShoppingModule } from './shopping/shopping.module';
import { ShoppingCartModule } from './shopping-cart/shopping-cart.module';
import { ShoppingStatusModule } from './shopping-status/shopping-status.module';
import { SupplierModule } from './supplier/supplier.module';
import { TokenModule } from './token/token.module';
import { TokenNotificationModule } from './token-notification/token-notification.module';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { configService } from './config/config.service';

@Module({
  imports: [
    TypeOrmModule.forRoot(configService.getTypeOrmConfig()),
    CustomerModule,
    CategoryModule,
    PersonModule,
    PhotoModule,
    ProductModule,
    ShoppingModule,
    ShoppingCartModule,
    ShoppingStatusModule,
    SupplierModule,
    TokenModule,
    TokenNotificationModule,
    UserModule],
  controllers: [],
  providers: [
        MailerService, ],
})
export class AppModule { }
