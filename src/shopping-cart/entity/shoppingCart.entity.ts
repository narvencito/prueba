
import { Entity, Column, ManyToOne, OneToMany } from 'typeorm';
import { BaseEntity } from 'src/base.entity';
import { Shopping } from 'src/shopping/entity/shopping.entity';
import { Product } from 'src/product/entity/product.entity';


@Entity()
export class ShoppingCart  extends BaseEntity{
    @Column({ type: 'varchar', length: 80, nullable: true })
    productName: string;

    @Column({ type: 'decimal', nullable: true })
    price: number;

    @Column({ type: 'decimal',  nullable: true })
    shippingPrice: string;

    @Column({ type: 'decimal',  nullable: true })
    quantity: number;

    @Column({ type: 'boolean', nullable: true })
    confirmOrder: boolean;

    @Column({ type: 'boolean', nullable: true })
    confirmShipping: boolean;

    @ManyToOne(type => Shopping, shopping => shopping.carts)
    shopping: Shopping;
    
    @ManyToOne(type => Product, product => product.carts)
    product: Product;
}
