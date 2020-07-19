
import { Entity, Column, OneToOne, JoinColumn, OneToMany } from 'typeorm';
import { BaseEntity } from 'src/base.entity';
import { Person } from 'src/person/entity/person.entity';
import { Shopping } from 'src/shopping/entity/shopping.entity';


@Entity()
export class Customer  extends BaseEntity{
    @Column({ type: 'varchar', length: 80, nullable: true, select:false})
    qualification: string;

    @Column({ type: 'varchar', length: 80, nullable: true})
    vaultBlock: string;

    @OneToOne(type => Person)
    @JoinColumn()
    person: Person;

    @OneToMany(type => Shopping, shopping => shopping.customer)
    shoppings: Shopping[];
}
