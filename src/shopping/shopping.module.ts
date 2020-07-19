import { Module } from '@nestjs/common';
import { ShoppingService } from './shopping.service';
import { ShoppingController } from './shopping.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Shopping } from './entity/shopping.entity';
import { ShoppingCart } from 'src/shopping-cart/entity/shoppingCart.entity';
import { ShoppingStatus } from 'src/shopping-status/entity/shoppingStatus.entity';
import { TokenNotification } from 'src/token-notification/entity/tokenNotification.entity';
import { TokenNotificationService } from 'src/token-notification/token-notification.service';
import { Supplier } from 'src/supplier/entity/supplier.entity';
import { Customer } from 'src/customer/entity/customer.entity';
import { Product } from 'src/product/entity/product.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Shopping, ShoppingCart, ShoppingStatus, TokenNotification, Supplier, Customer, Product])],
  providers: [ShoppingService, TokenNotificationService],
  controllers: [ShoppingController]
})
export class ShoppingModule {}
