import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { RoleService } from './role.service';
import { CreatingRoleDTO } from './dto/CreatingRole.dto';
import { RolesGuard } from './role.guard';

@Controller('role')
export class RoleController {
  constructor(private roleService: RoleService) {}

  @Post()
  async createRole(@Body() creatingRoleDTO: CreatingRoleDTO) {
    return await this.roleService.save(creatingRoleDTO);
  }

  @UseGuards(RolesGuard)
  @Get()
  async findRoles() {
    return await this.roleService.findAll();
  }
}
