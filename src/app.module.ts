import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { DestinationsController } from './controllers/destinations.controller';
import { DestinationsService } from './services/destinations.service';
import { User } from './entities/user.entity';
import { Destination } from './entities/destination.entity';
import { UserAction } from './entities/user-action.entity';
import { databaseConfig } from './database/database.config';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import configuration from './config/configuration';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
    }),
    TypeOrmModule.forRoot(databaseConfig),
    TypeOrmModule.forFeature([Destination, UserAction]),
    AuthModule,
    UsersModule,
  ],
  controllers: [DestinationsController],
  providers: [DestinationsService],
})
export class AppModule {}
