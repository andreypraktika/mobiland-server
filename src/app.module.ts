import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { DatabaseModule } from './database/database.module';
import { AuthModule } from './auth/auth.module';
import { RoleModule } from './role/role.module';

@Module({
  imports: [DatabaseModule, UserModule, AuthModule, RoleModule],
  providers: [],
})
export class AppModule {}
