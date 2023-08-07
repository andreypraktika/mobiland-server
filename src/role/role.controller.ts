import { Body, Controller, Get, Post } from '@nestjs/common';
import { RoleService } from './role.service';
import { CreatingRoleDTO } from './dto/CreatingRoleDTO';

@Controller('role')
export class RoleController {
  constructor(private roleService: RoleService) {}

  @Post()
  async createRole(@Body() creatingRoleDTO: CreatingRoleDTO) {
    return await this.roleService.save(creatingRoleDTO);
  }

  @Get()
  async findRoles() {
    return await this.roleService.findAll();
  }
}
