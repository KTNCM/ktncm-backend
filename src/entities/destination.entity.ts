import { Entity, Column, OneToMany, PrimaryColumn } from 'typeorm';
import { UserAction } from './user-action.entity';

@Entity('destinations')
export class Destination {
  @PrimaryColumn()
  name: string;

  @Column({ type: 'text', charset: 'utf8mb4' })
  description: string;

  @Column({ nullable: true })
  contact: string;

  @Column()
  address: string;

  @Column()
  url: string;

  @OneToMany(() => UserAction, (action) => action.destination)
  userActions: UserAction[];
} 