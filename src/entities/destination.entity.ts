import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { UserAction } from './user-action.entity';

@Entity('destinations')
export class Destination {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column({ nullable: true })
  contact: string;

  @Column()
  address: string;

  @OneToMany(() => UserAction, (action) => action.destination)
  userActions: UserAction[];
} 