import { Module } from '@nestjs/common';
import { ShoppingCartService } from './shopping-cart.service';
import { ShoppingCartController } from './shopping-cart.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ShoppingCart } from './entity/shoppingCart.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ShoppingCart])],
  providers: [ShoppingCartService],
  controllers: [ShoppingCartController]
})
export class ShoppingCartModule {}
