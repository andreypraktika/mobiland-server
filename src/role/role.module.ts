import { Module } from '@nestjs/common';
import { RoleController } from './role.controller';
import { DatabaseModule } from '../database/database.module';
import { RoleService } from './role.service';
import { DataSource } from 'typeorm';
import { Role } from './role.entity';

@Module({
  imports: [DatabaseModule],
  providers: [
    RoleService,
    {
      provide: 'ROLE_REPOSITORY',
      useFactory: (dataSource: DataSource) => dataSource.getRepository(Role),
      inject: ['DATA_SOURCE'],
    },
  ],
  controllers: [RoleController],
  exports: [RoleService],
})
export class RoleModule {}
