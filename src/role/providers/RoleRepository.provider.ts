import { DataSource } from 'typeorm';
import { Role } from '../role.entity';
import { Provider } from '@nestjs/common';

export const RoleRepository: Provider = {
  provide: 'RoleRepository',
  useFactory: (dataSource: DataSource) => dataSource.getRepository(Role),
  inject: ['DATA_SOURCE'],
};
