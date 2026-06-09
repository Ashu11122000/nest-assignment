import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';

import { Messages } from '../../common/constants/message.constant';

import { User } from './entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { QueryUserDto } from './dto/query-user.dto';
import { UsersRepository } from './users.repository';

@Injectable()
export class UsersService {
  constructor(private readonly usersRepository: UsersRepository) {}

  async create(createUserDto: CreateUserDto): Promise<{
    message: string;
    data: User;
  }> {
    const existingUser = await this.usersRepository.findByEmail(
      createUserDto.email,
    );

    if (existingUser) {
      throw new ConflictException('Email already exists');
    }

    const user = this.usersRepository.create(createUserDto);

    const savedUser = await this.usersRepository.save(user);

    return {
      message: Messages.USER_CREATED,
      data: savedUser,
    };
  }

  async findAll(query?: QueryUserDto): Promise<{
    message: string;
    data: User[];
  }> {
    const users = await this.usersRepository.findWithFilters(query);

    return {
      message: Messages.SUCCESS,
      data: users,
    };
  }

  async findOne(id: number): Promise<{
    message: string;
    data: User;
  }> {
    const user = await this.usersRepository.findOne(id);

    if (!user) {
      throw new NotFoundException('User not found');
    }

    return {
      message: Messages.SUCCESS,
      data: user,
    };
  }

  async findByEmail(email: string): Promise<User | null> {
    return this.usersRepository.findByEmail(email);
  }

  async update(
    id: number,
    updateUserDto: UpdateUserDto,
  ): Promise<{
    message: string;
    data: User;
  }> {
    const existingUser = await this.usersRepository.findOne(id);

    if (!existingUser) {
      throw new NotFoundException('User not found');
    }

    if (updateUserDto.email && updateUserDto.email !== existingUser.email) {
      const emailExists = await this.usersRepository.findByEmail(
        updateUserDto.email,
      );

      if (emailExists) {
        throw new ConflictException('Email already exists');
      }
    }

    if (updateUserDto.firstName !== undefined) {
      existingUser.firstName = updateUserDto.firstName;
    }

    if (updateUserDto.lastName !== undefined) {
      existingUser.lastName = updateUserDto.lastName;
    }

    if (updateUserDto.email !== undefined) {
      existingUser.email = updateUserDto.email;
    }

    if (updateUserDto.phone !== undefined) {
      existingUser.phone = updateUserDto.phone;
    }

    const updatedUser = await this.usersRepository.save(existingUser);

    return {
      message: Messages.USER_UPDATED,
      data: updatedUser,
    };
  }

  async remove(id: number): Promise<{
    message: string;
    data: null;
  }> {
    const user = await this.usersRepository.findOne(id);

    if (!user) {
      throw new NotFoundException('User not found');
    }

    await this.usersRepository.remove(user);

    return {
      message: Messages.USER_DELETED,
      data: null,
    };
  }
}
