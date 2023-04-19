import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { OrderService } from './order.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { Order } from './entities/order.entity';

@Controller('order')
export class OrderController {
  constructor(private readonly orderService: OrderService) { }

  @Post()
  async createOrder(@Body() dto: CreateOrderDto): Promise<Order> {
    const newOrder = await this.orderService.createOrder(dto);
    return newOrder;
  }

  @Get('/:OrderNumber/:companyID')
  async checkOrderStatus(
    @Param('OrderNumber') orderNumber: string,
    @Param('companyID') companyId: string,
  ): Promise<string> {
    const status = await this.orderService.checkStatus(orderNumber, companyId);
    return status;
  }
}
