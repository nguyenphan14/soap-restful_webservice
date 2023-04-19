import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Order } from './entities/order.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateOrderDto } from './dto/create-order.dto';

@Injectable()
export class OrderService {
  constructor(
    @InjectRepository(Order)
    private orderRepository: Repository<Order>,
  ) { }

  async checkStatus(orderNumber: string, companyId: string): Promise<string> {
    const order = await this.orderRepository.findOne({
      where: {
        order_number: orderNumber,
        company_id: companyId,
      },
    });

    if (!order) {
      throw new HttpException('Order not found!', HttpStatus.NOT_FOUND);
    }

    return order.status;
  }

  async createOrder(dto: CreateOrderDto): Promise<Order> {
    const newOrder = new Order();
    Object.assign(newOrder, dto);
    return await newOrder.save();
  }
}
