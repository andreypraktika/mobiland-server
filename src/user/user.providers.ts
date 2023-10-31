import { DataSource } from 'typeorm';
import { User } from './user.entity';
import { Provider } from '@nestjs/common';

export const UserProvider: Provider = {
  provide: 'UserRepository',
  useFactory: (dataSource: DataSource) => dataSource.getRepository(User),
  inject: ['DATA_SOURCE'],
};
