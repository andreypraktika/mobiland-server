import { User } from './user/user.entity';
import { Role } from './role/role.entity';
import { DataSourceOptions } from 'typeorm';

export const config: DataSourceOptions = {
  type: 'postgres',
  username: 'postgres',
  password: '1111',
  port: 5433,
  host: 'localhost',
  database: 'mobiland_db',
  synchronize: true,
  entities: [User, Role],
};
