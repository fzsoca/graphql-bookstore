import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Book } from './book.model';
import { Customer } from './customer.model';

@ObjectType()
export class Review {
  @Field(() => ID)
  id: number;

  @Field(() => Book)
  book: Book;

  @Field(() => Customer)
  customer: Customer;

  @Field()
  rating: number;

  @Field({ nullable: true })
  text?: string;
}
