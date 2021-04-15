import { Module } from '@nestjs/common';
import { usersController } from './infra/http/usersController';
import { usersService } from './services/usersService';
import { TypeOrmModule } from '@nestjs/typeorm';
import { user } from './infra/typeorm/entities/usersEntity';
import { usersRepository } from './infra/typeorm/repositories/usersRepository';

@Module({
  imports: [TypeOrmModule.forFeature([user, usersRepository])],
  controllers: [usersController],
  providers: [usersService],
})
export class usersModule {}
