import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Product } from './entities/product.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private productRepository: Repository<Product>,
  ) { }
  async checkQuantity(id: string, quantity: number): Promise<boolean> {
    const product = await this.productRepository.findOne({
      where: {
        id: Number(id),
        quantity: quantity,
      },
    });

    if (!product) {
      throw new HttpException('Product not found!', HttpStatus.NOT_FOUND);
    }

    return product.quantity - quantity >= 0;
  }
}
