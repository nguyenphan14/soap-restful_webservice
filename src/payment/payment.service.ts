import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Payment } from './entities/payment.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CalcFeeDto } from './dto/calc-fee.dto';

@Injectable()
export class PaymentService {
  constructor(
    @InjectRepository(Payment)
    private paymentRepository: Repository<Payment>,
  ) { }

  findAll(): Promise<Payment[]> {
    return this.paymentRepository.find();
  }

  findOne(id: number): Promise<Payment | null> {
    return this.paymentRepository.findOneBy({ id });
  }

  async remove(id: number): Promise<void> {
    await this.paymentRepository.delete(id);
  }

  async calcFee(dto: CalcFeeDto): Promise<number> {
    const user = new Payment();

    Object.assign(user, dto);
    user.customer_name = dto.customer_name;
    console.log(user);

    const { amount } = dto;
    let fee = amount * 10;
    if (amount < 10) {
      fee = 100;
    }
    user.fee = fee;
    await user.save();
    return fee;
  }
}
