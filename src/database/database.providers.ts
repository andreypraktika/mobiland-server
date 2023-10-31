import { DataSource } from 'typeorm';
import { config } from '../orm.config';

export const DatabaseProvider = {
  provide: 'DATA_SOURCE',
  useFactory: async () => {
    const dataSource = new DataSource(config);
    return dataSource.initialize();
  },
};
