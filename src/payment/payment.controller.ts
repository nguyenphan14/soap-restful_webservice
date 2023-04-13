import { Body, Controller, Get, Post } from '@nestjs/common';
import { PaymentService } from './payment.service';

@Controller('payment')
export class PaymentController {
  constructor(private readonly paymentService: PaymentService) { }

  @Get()
  async getAll(): Promise<any> {
    return 'hehe';
  }

  @Post('/calc_fee')
  async calculateFee(@Body() dto: any): Promise<any> {
    const fee: number = await this.paymentService.calcFee(dto);
    return fee;
  }
}
