import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Book } from './book.model';

@ObjectType()
export class Author {
  @Field(() => ID)
  id: number;

  @Field()
  name: string;

  @Field({ nullable: true })
  biography?: string;

  @Field(() => [Book])
  books: Book[];
}
