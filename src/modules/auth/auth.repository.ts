import { Injectable } from '@nestjs/common';

import { UsersRepository } from '../users/users.repository';
import { User } from '../users/entities/user.entity';

@Injectable()
export class AuthRepository {
  constructor(private readonly usersRepository: UsersRepository) {}

  async findByEmail(email: string): Promise<User | null> {
    return this.usersRepository.findByEmail(email);
  }

  create(userData: Partial<User>): User {
    return this.usersRepository.create(userData);
  }

  async save(user: User): Promise<User> {
    return this.usersRepository.save(user);
  }
}
