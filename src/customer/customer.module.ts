import { Module } from '@nestjs/common';
import { CustomerService } from './customer.service';
import { CustomerController } from './customer.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Customer } from './entity/customer.entity';
import { ShoppingService } from 'src/shopping/shopping.service';
import { Shopping } from 'src/shopping/entity/shopping.entity';
import { ShoppingCart } from 'src/shopping-cart/entity/shoppingCart.entity';
import { ShoppingStatus } from 'src/shopping-status/entity/shoppingStatus.entity';
import { TokenNotification } from 'src/token-notification/entity/tokenNotification.entity';
import { TokenNotificationService } from 'src/token-notification/token-notification.service';
import { Supplier } from 'src/supplier/entity/supplier.entity';
import { Product } from 'src/product/entity/product.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Customer, Shopping, ShoppingCart, ShoppingStatus, TokenNotification, Supplier, Product])],
  providers: [CustomerService,ShoppingService, TokenNotificationService],
  controllers: [CustomerController]
})
export class CustomerModule {}
