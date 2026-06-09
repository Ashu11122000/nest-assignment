import { Injectable, NotFoundException } from '@nestjs/common';

import { Messages } from '../../common/constants/message.constant';

import { ProductsRepository } from './products.repository';
import { Product } from './entities/product.entity';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { QueryProductDto } from './dto/query-product.dto';

@Injectable()
export class ProductsService {
  constructor(private readonly repository: ProductsRepository) {}

  async create(dto: CreateProductDto): Promise<{
    message: string;
    data: Product;
  }> {
    const product = await this.repository.createProduct(dto);

    return {
      message: Messages.PRODUCT_CREATED,
      data: product,
    };
  }

  async findAll(query?: QueryProductDto): Promise<{
    message: string;
    data: Product[];
  }> {
    const products = await this.repository.findAll(query);

    return {
      message: Messages.SUCCESS,
      data: products,
    };
  }

  async findOne(id: number): Promise<{
    message: string;
    data: Product;
  }> {
    const product = await this.repository.findOne(id);

    if (!product) {
      throw new NotFoundException('Product not found');
    }

    return {
      message: Messages.SUCCESS,
      data: product,
    };
  }

  async update(
    id: number,
    dto: UpdateProductDto,
  ): Promise<{
    message: string;
    data: Product;
  }> {
    const existingProduct = await this.repository.findOne(id);

    if (!existingProduct) {
      throw new NotFoundException('Product not found');
    }

    await this.repository.updateProduct(id, dto);

    const updatedProduct = await this.repository.findOne(id);

    if (!updatedProduct) {
      throw new NotFoundException('Product not found');
    }

    return {
      message: Messages.PRODUCT_UPDATED,
      data: updatedProduct,
    };
  }

  async remove(id: number): Promise<{
    message: string;
    data: null;
  }> {
    const product = await this.repository.findOne(id);

    if (!product) {
      throw new NotFoundException('Product not found');
    }

    await this.repository.deleteProduct(id);

    return {
      message: Messages.PRODUCT_DELETED,
      data: null,
    };
  }
}
