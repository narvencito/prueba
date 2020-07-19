import { Module } from '@nestjs/common';
import { ShoppingStatusService } from './shopping-status.service';
import { ShoppingStatusController } from './shopping-status.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ShoppingStatus } from './entity/shoppingStatus.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ShoppingStatus])],
  providers: [ShoppingStatusService],
  controllers: [ShoppingStatusController]
})
export class ShoppingStatusModule {}
