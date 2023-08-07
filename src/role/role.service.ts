import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Role } from './role.entity';

@Injectable()
export class RoleService {
  constructor(
    @Inject('ROLE_REPOSITORY')
    private roleRepository: Repository<Role>,
  ) {}

  async findOneByName(name) {
    return await this.roleRepository.findOne({ where: { name } });
  }

  async save(role) {
    const newRole = this.roleRepository.save(role);
    return newRole;
  }

  async findAll() {
    return await this.roleRepository.find();
  }
}
