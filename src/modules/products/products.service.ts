import { Injectable, NotFoundException } from '@nestjs/common';

import { ProductsRepository } from './products.repository';

import { Product } from './entities/product.entity';

import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { QueryProductDto } from './dto/query-product.dto';

@Injectable()
export class ProductsService {
  constructor(private readonly repository: ProductsRepository) {}

  async create(dto: CreateProductDto): Promise<Product> {
    return this.repository.createProduct(dto);
  }

  async findAll(query?: QueryProductDto): Promise<Product[]> {
    return this.repository.findAll(query);
  }

  async findOne(id: number): Promise<Product> {
    const product = await this.repository.findOne(id);

    if (!product) {
      throw new NotFoundException('Product not found');
    }

    return product;
  }

  async update(id: number, dto: UpdateProductDto): Promise<Product> {
    await this.findOne(id);

    await this.repository.updateProduct(id, dto);

    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.findOne(id);

    await this.repository.deleteProduct(id);
  }
}
