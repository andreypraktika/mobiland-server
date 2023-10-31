import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Role } from './role.entity';
import { CreatingRoleDTO } from './dto/CreatingRole.dto';

@Injectable()
export class RoleService {
  constructor(
    @Inject('RoleRepository')
    private readonly roleRepository: Repository<Role>,
  ) {}

  async findOneByName(name: string) {
    return await this.roleRepository.findOne({ where: { name } });
  }

  async save(role: CreatingRoleDTO) {
    return await this.roleRepository.save(role);
  }

  async findAll() {
    return await this.roleRepository.find();
  }
}
