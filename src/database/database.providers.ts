import { DataSource } from 'typeorm';
import { config } from '../orm.config';

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource(config);
      return dataSource.initialize();
    },
  },
];
