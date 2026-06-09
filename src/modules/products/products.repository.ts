import { Injectable } from '@nestjs/common';
import { Repository, Between, Like } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

import { Product } from './entities/product.entity';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { QueryProductDto } from './dto/query-product.dto';

@Injectable()
export class ProductsRepository {
  constructor(
    @InjectRepository(Product)
    private readonly repository: Repository<Product>,
  ) {}

  async createProduct(dto: CreateProductDto): Promise<Product> {
    const product = this.repository.create(dto);

    return this.repository.save(product);
  }

  async findAll(query?: QueryProductDto): Promise<Product[]> {
    if (!query) {
      return this.repository.find();
    }

    const where: Record<string, unknown> = {};

    if (query.name) {
      where.name = Like(`%${query.name}%`);
    }

    if (query.minPrice && query.maxPrice) {
      where.price = Between(Number(query.minPrice), Number(query.maxPrice));
    }

    return this.repository.find({ where });
  }

  async findOne(id: number): Promise<Product | null> {
    return this.repository.findOne({
      where: { id },
    });
  }

  async updateProduct(id: number, dto: UpdateProductDto): Promise<void> {
    await this.repository.update(id, dto);
  }

  async deleteProduct(id: number): Promise<void> {
    await this.repository.delete(id);
  }
}
