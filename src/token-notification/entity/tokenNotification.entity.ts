
import { Entity, Column, ManyToOne } from 'typeorm';
import { BaseEntity } from 'src/base.entity';
import { Person } from 'src/person/entity/person.entity';


@Entity()
export class TokenNotification  extends BaseEntity{
    @Column({ type: 'varchar', length: 300, nullable: true })
    token: string;

    @ManyToOne(type => Person, person => person.tokens)
    person: Person;

}
