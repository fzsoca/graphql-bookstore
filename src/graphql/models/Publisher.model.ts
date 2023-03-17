import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Book } from './book.model';

@ObjectType()
export class Publisher {
  @Field(() => ID)
  id: number;

  @Field()
  name: string;

  @Field()
  address: string;

  @Field()
  phone: string;

  @Field(() => [Book])
  books: Book[];
}
