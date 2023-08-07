import { IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { GettingUsersDTO } from './get-users.dto';
import { Role } from '../../role/role.entity';

export class CreateUserDTO extends GettingUsersDTO {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  readonly password: string;

  @ApiProperty()
  @IsNotEmpty()
  readonly role: Role;
}
