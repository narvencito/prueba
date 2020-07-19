
import { Entity, Column, OneToMany, OneToOne, JoinColumn, ManyToOne } from 'typeorm';
import { BaseEntity } from 'src/base.entity';
import { Photo } from 'src/photo/entity/photo.entity';
import { Category } from 'src/category/entity/category.entity';
import { Supplier } from 'src/supplier/entity/supplier.entity';
import { ShoppingCart } from 'src/shopping-cart/entity/shoppingCart.entity';


@Entity()
export class Product  extends BaseEntity{
    @Column({ type: 'varchar', length: 80, nullable: true })
    name: string;

    @Column({ type: 'numeric',  nullable: true })
    price: number;

    @Column({ type: 'decimal',  nullable: true })
    stock: number;

    @Column({ type: 'varchar', length: 80, nullable: true })
    description: string;

    @Column({ type: 'varchar', length: 80, nullable: true })
    brand: string;
    //lista de photos

    @OneToMany(type => Photo, photo => photo.product)
    photos: Photo[];

    @ManyToOne(type => Category, category => category.products)
    category: Category;

    @ManyToOne(type => Supplier, supplier => supplier.products)
    supplier: Supplier;

    @OneToMany(type => ShoppingCart, shoppingCart => shoppingCart.product)
    carts: ShoppingCart[];

}
