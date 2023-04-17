import { Body, Controller, Get, Post } from '@nestjs/common';
import { PaymentService } from './payment.service';
import { CalcFeeDto } from './dto/calc-fee.dto';

@Controller('payment')
export class PaymentController {
  constructor(private readonly paymentService: PaymentService) { }

  @Get()
  async getAll(): Promise<any> {
    const payments = await this.paymentService.findAll();
    return payments;
  }

  @Post('/calc_fee')
  async calculateFee(@Body() dto: CalcFeeDto): Promise<any> {
    const fee: number = await this.paymentService.calcFee(dto);
    return fee;
  }
}
