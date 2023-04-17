import { IsNumber, IsString } from 'class-validator';

export class CalcFeeDto {
  @IsString()
  customer_name: string;

  @IsString()
  card_type: string;

  @IsString()
  card_number: string;

  @IsNumber()
  cvc: number;

  @IsString()
  expiration_date: string;

  @IsNumber()
  amount: number;

  @IsNumber()
  fee: number;
}
