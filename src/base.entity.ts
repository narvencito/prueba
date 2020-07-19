import {  Column, PrimaryGeneratedColumn,  } from 'typeorm';

export class BaseEntity {
   @PrimaryGeneratedColumn()
   id: number;

  @Column({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' , select: false})
  createdAt: Date;

  @Column({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP', select: false })
  updateAt: Date;
}
 