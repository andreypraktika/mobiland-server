import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { User } from './user/entities/user.entity';

export const config: TypeOrmModuleOptions = {
  type: 'postgres',
  username: 'postgres',
  password: '1111',
  port: 5433,
  host: 'localhost',
  database: 'mobiland_db',
  synchronize: true,
  entities: [User],
};
