import { Test, TestingModule } from '@nestjs/testing';
import { ConflictException, NotFoundException } from '@nestjs/common';

import { UsersService } from '../../src/modules/users/users.service';
import { UsersRepository } from '../../src/modules/users/users.repository';

describe('UsersService', () => {
  let service: UsersService;

  const mockRepository = {
    findByEmail: jest.fn(),
    create: jest.fn(),
    save: jest.fn(),
    findWithFilters: jest.fn(),
    findOne: jest.fn(),
    remove: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UsersService,
        {
          provide: UsersRepository,
          useValue: mockRepository,
        },
      ],
    }).compile();

    service = module.get<UsersService>(UsersService);

    jest.clearAllMocks();
  });

  it('should create a user', async () => {
    mockRepository.findByEmail.mockResolvedValue(null);

    const user = {
      id: 1,
      email: 'test@test.com',
    };

    mockRepository.create.mockReturnValue(user);
    mockRepository.save.mockResolvedValue(user);

    const result = await service.create({
      firstName: 'Ashish',
      lastName: 'Sharma',
      email: 'test@test.com',
      phone: '9999999999',
    });

    expect(result.data).toEqual(user);
  });

  it('should throw conflict if email exists', async () => {
    mockRepository.findByEmail.mockResolvedValue({
      id: 1,
    });

    await expect(
      service.create({
        firstName: 'Ashish',
        lastName: 'Sharma',
        email: 'test@test.com',
        phone: '9999999999',
      }),
    ).rejects.toThrow(ConflictException);
  });

  it('should return user by id', async () => {
    const user = { id: 1 };

    mockRepository.findOne.mockResolvedValue(user);

    const result = await service.findOne(1);

    expect(result.data).toEqual(user);
  });

  it('should throw not found', async () => {
    mockRepository.findOne.mockResolvedValue(null);

    await expect(service.findOne(1)).rejects.toThrow(NotFoundException);
  });

  it('should delete user', async () => {
    mockRepository.findOne.mockResolvedValue({ id: 1 });

    await service.remove(1);

    expect(mockRepository.remove).toHaveBeenCalled();
  });
});
