import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { DataSource } from 'typeorm';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [DatabaseModule, UserModule],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}
