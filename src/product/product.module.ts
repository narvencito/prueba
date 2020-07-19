import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './entity/product.entity';
import { Photo } from 'src/photo/entity/photo.entity';
import { PhotoService } from 'src/photo/photo.service';

@Module({
  imports: [TypeOrmModule.forFeature([Product,Photo])],
  providers: [ProductService],
  controllers: [ProductController]
})
export class ProductModule {}
