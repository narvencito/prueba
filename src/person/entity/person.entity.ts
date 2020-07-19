
import { Entity, Column, OneToOne, OneToMany } from 'typeorm';
import { BaseEntity } from 'src/base.entity';
import { Supplier } from 'src/supplier/entity/supplier.entity';
import { Customer } from 'src/customer/entity/customer.entity';
import { TokenNotification } from 'src/token-notification/entity/tokenNotification.entity';


@Entity()
export class Person  extends BaseEntity{
    @Column({ type: 'varchar', length: 80, nullable: true })
    qualification: string;

    @Column({ type: 'varchar', length: 80, nullable: true })
    numberDoc: string;

    @Column({ type: 'varchar', length: 80, nullable: true })
    lastNameP: string;

    @Column({ type: 'varchar', length: 80, nullable: true })
    lastNameM: string;

    @Column({ type: 'varchar', length: 80, nullable: true })
    firstName: string;

    @Column({ type: 'varchar', length: 100, nullable: true })
    address: string;

    @Column({ type: 'varchar', length: 80, nullable: true })
    telephone: string;

    @Column({ type: 'varchar', length: 80, nullable: true })
    email : string;

    @OneToOne(type => Supplier, supplier => supplier.person) 
    supplier: Supplier;

    @OneToOne(type => Customer, customer => customer.person) 
    customer: Customer;

    @OneToMany(type => TokenNotification, token => token.person)
    tokens: TokenNotification[];

}
