import { Entity, Column, PrimaryGeneratedColumn, BaseEntity } from 'typeorm';

@Entity()
export class Order extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: String })
  order_number: string;

  @Column({ type: String })
  company_id: string;

  @Column({ type: String })
  status: string;
}
