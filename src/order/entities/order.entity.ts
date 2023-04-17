import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Order {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: String })
  order_number: string;

  @Column({ type: String })
  company_id: string;

  @Column({ type: String })
  status: string;
}
