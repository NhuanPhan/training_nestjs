import { BaseEntity, Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('USER')
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  password: string;
  
  @Column()
  status: StatusUser;
}
  
export enum StatusUser {
  TRUE = `TRUE`,
  FALSE = `FALSE`,
  
}


