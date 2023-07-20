import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  NotFoundException,
  Param,
  Post,
  Query,
} from '@nestjs/common';
import { UserService } from '../services/user.service';
import { ApiTags } from '@nestjs/swagger';
import { CreateUserDTO } from '../dto/create-user.dto';
import { PageOptionsDto } from '../../pagination/dto/page-options.dto';

@ApiTags('Users')
@Controller('/users')
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  @HttpCode(HttpStatus.OK)
  async getUsers(@Query() pageOptionsDto: PageOptionsDto) {
    const data = await this.userService.findAll(pageOptionsDto);
    return { data };
  }

  @Post()
  async createUser(@Body() createUserDto: CreateUserDTO) {
    return this.userService.createUser(createUserDto);
  }

  @Delete(':userId')
  async deleteUser(@Param('userId') userId: number) {
    return this.userService.deleteUser(userId);
  }

  @Get(':userId')
  async getUserById(@Param('userId') userId: number) {
    const user = await this.userService.findUserById(userId);

    if (user) {
      return user;
    } else {
      throw new NotFoundException();
    }
  }
}
