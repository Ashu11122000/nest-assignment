import { Test, TestingModule } from '@nestjs/testing';
import { NotFoundException } from '@nestjs/common';

import { ProductsService } from '../../src/modules/products/products.service';
import { ProductsRepository } from '../../src/modules/products/products.repository';

describe('ProductsService', () => {
  let service: ProductsService;

  const mockRepository = {
    createProduct: jest.fn(),
    findAll: jest.fn(),
    findOne: jest.fn(),
    updateProduct: jest.fn(),
    deleteProduct: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ProductsService,
        {
          provide: ProductsRepository,
          useValue: mockRepository,
        },
      ],
    }).compile();

    service = module.get<ProductsService>(ProductsService);

    jest.clearAllMocks();
  });

  it('should create product', async () => {
    const product = { id: 1, name: 'Laptop' };

    mockRepository.createProduct.mockResolvedValue(product);

    const result = await service.create({
      name: 'Laptop',
      description: 'Gaming',
      price: 1000,
      stock: 5,
    });

    expect(result.data).toEqual(product);
  });

  it('should return all products', async () => {
    mockRepository.findAll.mockResolvedValue([]);

    const result = await service.findAll();

    expect(result.data).toEqual([]);
  });

  it('should throw not found', async () => {
    mockRepository.findOne.mockResolvedValue(null);

    await expect(service.findOne(1)).rejects.toThrow(NotFoundException);
  });

  it('should delete product', async () => {
    mockRepository.findOne.mockResolvedValue({ id: 1 });

    await service.remove(1);

    expect(mockRepository.deleteProduct).toHaveBeenCalled();
  });
});
