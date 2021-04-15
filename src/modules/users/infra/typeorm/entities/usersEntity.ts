import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class user {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  creationDate: Date;

  @Column()
  name: string;

  @Column({ default: true })
  email: string;
}
