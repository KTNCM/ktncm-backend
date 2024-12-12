import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { UserAction } from './user-action.entity';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @OneToMany(() => UserAction, (action) => action.user)
  actions: UserAction[];
} 