import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Order } from './order.model';
import { Review } from './review.model';

@ObjectType()
export class Customer {
  @Field(() => ID)
  id: number;

  @Field()
  name: string;

  @Field()
  address: string;

  @Field()
  phone: string;

  @Field()
  email: string;

  @Field(() => [Order])
  orders: Order[];

  @Field(() => [Review])
  reviews: Review[];
}
