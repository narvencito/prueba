
import { Entity, Column } from 'typeorm';
import { BaseEntity } from 'src/base.entity';


@Entity()
export class Token  extends BaseEntity{
    @Column({ type: 'varchar', length: 80, nullable: true })
    qualification: string;

}
