
import { Entity, Column, OneToOne, JoinColumn, OneToMany } from 'typeorm';
import { BaseEntity } from 'src/base.entity';
import { Person } from 'src/person/entity/person.entity';
import { Product } from 'src/product/entity/product.entity';


@Entity()
export class Supplier  extends BaseEntity{
    @Column({ type: 'varchar', length: 80, nullable: true, select:false })
    descripcion: string;

    @Column({ type: 'varchar', length: 80, nullable: true, select: false })
    latitud: string;

    @Column({ type: 'varchar', length: 80, nullable: true, select: false })
    longitud: string;

    @OneToOne(type => Person)
    @JoinColumn()
    person: Person;

    @OneToMany(type => Product, product => product.supplier)
    products: Product[];

}
