import { DataSource } from 'typeorm';
import { User } from '../user/entities/user.entity';

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'postgres',
        host: 'localhost',
        port: 5433,
        username: 'postgres',
        password: '1111',
        database: 'mobiland_db',
        entities: [User],
        synchronize: true,
      });

      return dataSource.initialize();
    },
  },
];
