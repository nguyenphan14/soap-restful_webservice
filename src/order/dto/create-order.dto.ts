import { IsString } from 'class-validator';

export class CreateOrderDto {
  @IsString()
  order_number: string;

  @IsString()
  company_id: string;

  @IsString()
  status: string;
}
