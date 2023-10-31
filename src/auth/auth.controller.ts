import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  NotFoundException,
  Post,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { ApiTags } from '@nestjs/swagger';
import * as bcrypt from 'bcrypt';
import { UserService } from '../user/user.service';
import { User } from '../user/user.entity';
import { CreateUserDto } from '../user/dto/CreateUser.dto';
import { LoginDto } from './dto/login.dto';
import { RoleService } from '../role/role.service';

@ApiTags('Auth')
@Controller('/auth')
export class AuthController {
  constructor(
    private authService: AuthService,
    private userService: UserService,
    private roleService: RoleService,
  ) {}

  @Post('/signup')
  async createUser(
    @Body() { username, password, firstName, lastName }: CreateUserDto,
  ): Promise<User> {
    const defaultRole = await this.roleService.findOneByName('user');

    if (!defaultRole) {
      throw new NotFoundException('Default role has not provided');
    }

    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, salt);
    const result = await this.userService.createUser({
      username,
      firstName,
      lastName,
      password: hashedPassword,
      role: defaultRole,
    });
    return { ...result, password: undefined };
  }

  @HttpCode(HttpStatus.OK)
  @Post('/login')
  public async login(@Body() { username, password }: LoginDto) {
    return await this.authService.signIn(username, password);
  }
}
