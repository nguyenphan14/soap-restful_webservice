import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Payment {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  customer_name: string;

  @Column()
  card_type: string;

  @Column({ default: true })
  card_number: boolean;

  @Column({})
  cvc: number;

  @Column({})
  expiration_date: string;

  @Column({})
  amount: number;

  @Column({})
  fee: number;
}
