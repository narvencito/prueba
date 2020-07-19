
import { Entity, Column, ManyToOne } from 'typeorm';
import { BaseEntity } from 'src/base.entity';
import { Product } from 'src/product/entity/product.entity';


@Entity()
export class Photo  extends BaseEntity{
    @Column({ type: 'varchar', length: 300, nullable: true })
    url: string;

    @ManyToOne(type => Product, product => product.photos)
    product: Product;

}
