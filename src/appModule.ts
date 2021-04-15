/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { usersModule } from './modules/users/usersModule';
import { TypeOrmModule } from '@nestjs/typeorm';
import config from '../database.config';
import { ConfigModule } from '@nestjs/config';
@Module({
  imports: [ConfigModule.forRoot(), usersModule, TypeOrmModule.forRoot(config)],
  controllers: [],
  providers: [],
})
export class AppModule {}
