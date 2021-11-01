import { BaseEntity, Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  type: string;

  @Column()
  password: string;
  
  @Column()
  status: StatusUser;
}
  
export enum StatusUser {
  OPEN = `OPEN`,
  IN_PROGRESS = `IN_PROGRESS`,
  DONE = `DONE`,
}
