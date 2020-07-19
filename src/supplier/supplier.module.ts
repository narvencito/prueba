import { Module } from '@nestjs/common';
import { SupplierService } from './supplier.service';
import { SupplierController } from './supplier.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Supplier } from './entity/supplier.entity';
import { ProductService } from 'src/product/product.service';
import { Product } from 'src/product/entity/product.entity';
import { Photo } from 'src/photo/entity/photo.entity';
import { ShoppingService } from 'src/shopping/shopping.service';
import { Shopping } from 'src/shopping/entity/shopping.entity';
import { ShoppingCart } from 'src/shopping-cart/entity/shoppingCart.entity';
import { ShoppingStatus } from 'src/shopping-status/entity/shoppingStatus.entity';
import { Customer } from 'src/customer/entity/customer.entity';
import { TokenNotification } from 'src/token-notification/entity/tokenNotification.entity';
import { TokenNotificationService } from 'src/token-notification/token-notification.service';

@Module({
  imports: [TypeOrmModule.forFeature([Supplier, Product, Photo, Shopping, ShoppingCart, ShoppingStatus, Customer, TokenNotification])],
  providers: [SupplierService, ProductService, ShoppingService, TokenNotificationService],
  controllers: [SupplierController]
})
export class SupplierModule {}
