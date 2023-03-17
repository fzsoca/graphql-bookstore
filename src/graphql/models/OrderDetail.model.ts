import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Order } from './order.model';
import { Book } from './book.model';

@ObjectType()
export class OrderDetail {
  @Field(() => ID)
  id: number;

  @Field(() => Order)
  order: Order;

  @Field(() => Book)
  book: Book;

  @Field()
  quantity: number;

  @Field()
  price: number;
}
