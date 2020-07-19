
import { Entity, Column, OneToMany, ManyToOne } from 'typeorm';
import { BaseEntity } from 'src/base.entity';
import { Customer } from 'src/customer/entity/customer.entity';
import { ShoppingCart } from 'src/shopping-cart/entity/shoppingCart.entity';
import { ShoppingStatus } from 'src/shopping-status/entity/shoppingStatus.entity';


@Entity()
export class Shopping  extends BaseEntity{
    @Column({ type: 'varchar', length: 80, nullable: true })
    qualification: string;

    @Column({ type: 'decimal',  nullable: true })
    total: string;

    @Column({ type: 'decimal',  nullable: true })
    subTotal: string;

    @Column({ type: 'varchar', length: 80, nullable: true })
    envio: string;

    @Column({ type: 'varchar', length: 80, nullable: true })
    latitud: string;

    @Column({ type: 'varchar', length: 80, nullable: true })
    longitud: string;

    @Column({ type: 'varchar', length: 80, nullable: true })
    code: string;

    @Column({ type: 'varchar', length: 150, nullable: true })
    sendAddress: string;

    @Column({ type: 'varchar', length: 50, nullable: true, select: false })
    amount: string;

    @Column({ type: 'varchar', length: 50, nullable: true, select: false })
    authorizedAmount: string;

    @Column({ type: 'varchar', length: 50, nullable: true, select: false })
    authorizationCode: string;

    @Column({ type: 'varchar', length: 50, nullable: true, select: false })
    purchaseNumber: string;

    @Column({ type: 'varchar', length: 50, nullable: true, select: false })
    traceNumber: string;

    @Column({ type: 'varchar', length: 50, nullable: true, select: false })
    transactionId: string;

    @Column({ type: 'varchar', length: 50, nullable: true, select: false })
    statusVisa: string;

    @Column({ type: 'varchar', length: 50, nullable: true, select: false })
    typePay: string;

    @Column({ nullable: true, select: false })
    transactionDate: Date;

    @ManyToOne(type => Customer, customer => customer.shoppings)
    customer: Customer;

    @OneToMany(type => ShoppingCart, shoppingCart => shoppingCart.shopping)
    carts: ShoppingCart[];

    @OneToMany(type => ShoppingStatus, shoppingStatus => shoppingStatus.shopping)
    status: ShoppingStatus[];
}
