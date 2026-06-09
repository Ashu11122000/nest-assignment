import { Test, TestingModule } from '@nestjs/testing';
import { ConflictException, UnauthorizedException } from '@nestjs/common';

import { AuthService } from '../../src/modules/auth/auth.service';
import { UsersService } from '../../src/modules/users/users.service';
import { JwtService } from '@nestjs/jwt';

import * as bcrypt from 'bcrypt';

describe('AuthService', () => {
  let service: AuthService;

  const mockUsersService = {
    findByEmail: jest.fn(),
    usersRepository: {
      save: jest.fn(),
    },
  };

  const mockJwtService = {
    sign: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AuthService,
        {
          provide: UsersService,
          useValue: mockUsersService,
        },
        {
          provide: JwtService,
          useValue: mockJwtService,
        },
      ],
    }).compile();

    service = module.get<AuthService>(AuthService);

    jest.clearAllMocks();
  });

  it('should register user', async () => {
    mockUsersService.findByEmail.mockResolvedValue(null);

    jest.spyOn(bcrypt, 'hash').mockResolvedValue('hashed' as never);

    mockUsersService.usersRepository.save.mockResolvedValue({});

    const result = await service.register({
      firstName: 'Ashish',
      lastName: 'Sharma',
      email: 'test@test.com',
      phone: '9999999999',
      password: 'password',
    });

    expect(result.message).toBe('User registered successfully');
  });

  it('should throw conflict if email exists', async () => {
    mockUsersService.findByEmail.mockResolvedValue({});

    await expect(
      service.register({
        firstName: 'Ashish',
        lastName: 'Sharma',
        email: 'test@test.com',
        phone: '9999999999',
        password: 'password',
      }),
    ).rejects.toThrow(ConflictException);
  });

  it('should login successfully', async () => {
    mockUsersService.findByEmail.mockResolvedValue({
      id: 1,
      email: 'test@test.com',
      password: 'hashed',
      role: 'USER',
    });

    jest.spyOn(bcrypt, 'compare').mockResolvedValue(true as never);

    mockJwtService.sign.mockReturnValue('jwt-token');

    const result = await service.login({
      email: 'test@test.com',
      password: 'password',
    });

    expect(result.accessToken).toBe('jwt-token');
  });

  it('should throw unauthorized', async () => {
    mockUsersService.findByEmail.mockResolvedValue(null);

    await expect(
      service.login({
        email: 'wrong@test.com',
        password: 'password',
      }),
    ).rejects.toThrow(UnauthorizedException);
  });
});
