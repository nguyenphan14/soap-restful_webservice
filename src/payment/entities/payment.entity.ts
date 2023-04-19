import { Entity, Column, PrimaryGeneratedColumn, BaseEntity } from 'typeorm';

@Entity()
export class Payment extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  customer_name: string;

  @Column()
  card_type: string;

  @Column()
  card_number: string;

  @Column()
  cvc: string;

  @Column()
  expiration_date: string;

  @Column()
  amount: number;

  @Column()
  fee: number;
}
