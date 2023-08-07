import { IsNotEmpty, IsString } from 'class-validator';

export class CreatingRoleDTO {
  @IsNotEmpty()
  @IsString()
  readonly name;
}
