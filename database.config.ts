import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { NAME, PASSWORD, TYPE, PORT, USER, HOST } from './src/config/database';

const config: TypeOrmModuleOptions = {
  type: <any>TYPE,
  host: HOST,
  port: <any>PORT,
  username: USER,
  password: PASSWORD,
  database: NAME,
  entities: ['dist/**/*Entity.js'],
  synchronize: false,
  cli: {
    migrationsDir: 'src/migrations',
  },
};

export default config;
