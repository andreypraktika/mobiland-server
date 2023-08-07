import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { UserModule } from '../user/user.module';
import { jwtConstants } from '../constants';
import { RoleModule } from '../role/role.module';

@Module({
  providers: [AuthService],
  controllers: [AuthController],
  imports: [
    JwtModule.register({
      global: true,
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '3060s' },
    }),
    UserModule,
    RoleModule,
  ],
})
export class AuthModule {}
