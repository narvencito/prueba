
import { Entity, Column, ManyToOne } from 'typeorm';
import { BaseEntity } from 'src/base.entity';
import { Shopping } from 'src/shopping/entity/shopping.entity';


@Entity()
export class ShoppingStatus  extends BaseEntity{
    @Column({ type: 'varchar', length: 80, nullable: true })
    status: string;

    @Column({ type: 'boolean',  default:false,  nullable: true })
    create: boolean;

    @Column({ type: 'boolean',  default:false,  nullable: true })
    confirm: boolean;

    @Column({ type: 'boolean',  default:false,  nullable: true })
    prepare: boolean;

    @Column({ type: 'boolean',  default:false,  nullable: true })
    send: boolean;

    @Column({ type: 'boolean',  default:false,  nullable: true })
    deliver: boolean;

    @ManyToOne(type => Shopping, shopping => shopping.status)
    shopping: Shopping;

}
