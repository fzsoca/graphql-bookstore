import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Book } from './book.model';

@ObjectType()
export class Genre {
  @Field(() => ID)
  id: number;

  @Field()
  name: string;

  @Field({ nullable: true })
  description?: string;

  @Field(() => [Book])
  books: Book[];
}
