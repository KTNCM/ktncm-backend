import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { User } from './user.entity';
import { Destination } from './destination.entity';

@Entity('user_actions')
export class UserAction {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, (user) => user.actions)
  user: User;

  @ManyToOne(() => Destination, (destination) => destination.userActions)
  destination: Destination;

  @Column()
  visited: boolean;

  @Column({ default: false })
  bookmark: boolean;
} 