import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Customer } from './customer.model';
import { OrderDetail } from './orderDetail.model';

@ObjectType()
export class Order {
  @Field(() => ID)
  id: number;

  @Field(() => Customer)
  customer: Customer;

  @Field()
  orderDate: Date;

  @Field()
  totalPrice: number;

  @Field({ nullable: true })
  paymentInfo?: string;

  @Field(() => [OrderDetail])
  orderDetails: OrderDetail[];
}
