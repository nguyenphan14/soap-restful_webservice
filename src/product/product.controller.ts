import { Controller, Param, Get, Query } from '@nestjs/common';
import { ProductService } from './product.service';
import { Product } from './entities/product.entity';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) { }

  @Get(':id/quantity')
  async checkQuantity(@Param('id') id: string,
    @Query('quantity') quantity: Number): Promise<number> {
    const quantity = await this.productService.checkQuantity(id, quantity)
    return null;
  }
}
