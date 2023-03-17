import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Genre } from './genre.model';
import { Author } from './author.model';
import { Publisher } from './publisher.model';
import { Review } from './review.model';
import { OrderDetail } from './orderDetail.model';

@ObjectType()
export class Book {
  @Field(() => ID)
  id: number;

  @Field()
  title: string;

  @Field()
  isbn: string;

  @Field(() => Genre)
  genre: Genre;

  @Field()
  publication: Date;

  @Field()
  price: number;

  @Field()
  quantity: number;

  @Field(() => [Review])
  reviews: Review[];

  @Field(() => [OrderDetail])
  OrderDetail: OrderDetail[];

  @Field(() => Author, { nullable: true })
  author?: Author;

  @Field(() => Publisher, { nullable: true })
  publisher?: Publisher;
}
