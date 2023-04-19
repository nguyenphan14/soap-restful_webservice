import { Controller, Param, Get, Query } from '@nestjs/common';
import { ProductService } from './product.service';
import { Product } from './entities/product.entity';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) { }

  @Get(':id')
  async checkQuantity(
    @Param('id') id: string,
    @Query('quantity') quantity: number,
  ): Promise<boolean> {
    const quantityRes = await this.productService.checkQuantity(id, quantity);
    return quantityRes;
  }
}
