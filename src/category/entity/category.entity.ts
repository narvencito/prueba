
import { Entity, Column, OneToMany } from 'typeorm';
import { BaseEntity } from 'src/base.entity';
import { Product } from 'src/product/entity/product.entity';


@Entity()
export class Category  extends BaseEntity{
    @Column({ type: 'varchar', length: 100, nullable: true })
    name: string;

    @OneToMany(type => Product, product => product.category)
    products: Product[];

}

