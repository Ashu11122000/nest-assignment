import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindOptionsWhere, ILike, Repository } from 'typeorm';

import { User } from './entities/user.entity';
import { QueryUserDto } from './dto/query-user.dto';

@Injectable()
export class UsersRepository {
  constructor(
    @InjectRepository(User)
    private readonly repository: Repository<User>,
  ) {}

  create(data: Partial<User>): User {
    return this.repository.create(data);
  }

  save(user: User): Promise<User> {
    return this.repository.save(user);
  }

  find(): Promise<User[]> {
    return this.repository.find();
  }

  findOne(id: number): Promise<User | null> {
    return this.repository.findOne({
      where: { id },
    });
  }

  remove(user: User): Promise<User> {
    return this.repository.remove(user);
  }

  findByEmail(email: string): Promise<User | null> {
    return this.repository.findOne({
      where: { email },
    });
  }

  async findWithFilters(query?: QueryUserDto): Promise<User[]> {
    if (!query) {
      return this.repository.find();
    }

    const where: FindOptionsWhere<User> = {};

    if (query.firstName) {
      where.firstName = ILike(`%${query.firstName}%`);
    }

    if (query.lastName) {
      where.lastName = ILike(`%${query.lastName}%`);
    }

    if (query.email) {
      where.email = ILike(`%${query.email}%`);
    }

    return this.repository.find({
      where,
      order: {
        createdAt: 'DESC',
      },
    });
  }
}
