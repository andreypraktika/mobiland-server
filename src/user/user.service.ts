import { Inject, Injectable } from '@nestjs/common';
import { User } from './user.entity';
import { DeleteResult, Repository } from 'typeorm';
import { CreateUserDto } from './dto/CreateUser.dto';
import { PageOptionsDto } from '../pagination/dto/page-options.dto';
import { PageMetaDto } from '../pagination/dto/page-meta.dto';
import { PageDto } from '../pagination/dto/page.dto';

@Injectable()
export class UserService {
  constructor(
    @Inject('UserRepository')
    private userRepository: Repository<User>,
  ) {}

  async findAll(pageOptionsDto: PageOptionsDto): Promise<PageDto<User>> {
    const queryBuilder = this.userRepository.createQueryBuilder('user');

    queryBuilder
      .orderBy('user.createdAt', pageOptionsDto.order)
      .skip(pageOptionsDto.skip)
      .take(pageOptionsDto.take);

    const itemCount = await queryBuilder.getCount();
    const { entities } = await queryBuilder.getRawAndEntities();

    const pageMetaDto = new PageMetaDto({ itemCount, pageOptionsDto });

    return new PageDto(entities, pageMetaDto);
  }

  async createUser(userDto: CreateUserDto): Promise<User> {
    const user = new User();
    user.firstName = userDto.firstName;
    user.lastName = userDto.lastName;
    user.password = userDto.password;
    user.username = userDto.username;
    user.role = userDto.role;
    return this.userRepository.save(user);
  }

  async deleteUser(userId: number): Promise<DeleteResult> {
    return await this.userRepository.delete(userId);
  }

  async findOneWithUserName(username: string) {
    return await this.userRepository.findOne({ where: { username } });
  }

  async findUserById(id: number): Promise<User | null> {
    return await this.userRepository
      .createQueryBuilder('user')
      .where('user.id = :id', { id })
      .getOne();
  }
}
