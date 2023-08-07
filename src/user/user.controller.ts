import {
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  NotFoundException,
  Param,
  Query,
  UseGuards,
} from '@nestjs/common';
import { UserService } from './user.service';
import { ApiTags } from '@nestjs/swagger';
import { PageOptionsDto } from '../pagination/dto/page-options.dto';
import { AuthGuard } from '../auth/auth.guard';

@ApiTags('Users')
@Controller('/users')
export class UserController {
  constructor(private userService: UserService) {}

  @UseGuards(AuthGuard)
  @Get()
  @HttpCode(HttpStatus.OK)
  async getUsers(@Query() pageOptionsDto: PageOptionsDto) {
    return await this.userService.findAll(pageOptionsDto);
  }

  @UseGuards(AuthGuard)
  @Delete(':userId')
  async deleteUser(@Param('userId') userId: number) {
    return this.userService.deleteUser(userId);
  }

  @UseGuards(AuthGuard)
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
