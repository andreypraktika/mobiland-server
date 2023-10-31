import { IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { GettingUsersDTO } from './GetUsers.dto';
import { Role } from '../../role/role.entity';

export class CreateUserDto extends GettingUsersDTO {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  readonly password: string;

  @ApiProperty()
  @IsNotEmpty()
  readonly role: Role;
}
