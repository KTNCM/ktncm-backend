import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { join } from 'path';
import { User } from '../entities/user.entity';
import { Destination } from '../entities/destination.entity';
import { UserAction } from '../entities/user-action.entity';

export const databaseConfig: TypeOrmModuleOptions = {
  type: 'sqlite',
  database: join(__dirname, '..', '..', 'data', 'kdm.sqlite'),
  entities: [User, Destination, UserAction],
  synchronize: true, // Set to false in production
  logging: process.env.NODE_ENV === 'development',
  migrations: [join(__dirname, 'migrations', '*.{ts,js}')],
  migrationsRun: true,
} as const;

// Helper function to get database path - useful for scripts
export const getDatabasePath = (): string => {
  return join(__dirname, '..', '..', 'data', 'kdm.sqlite');
}; 