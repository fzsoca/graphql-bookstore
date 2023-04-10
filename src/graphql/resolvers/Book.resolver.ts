import { PrismaService } from './../../prisma/prisma.service';
import { Args, Int, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { Book } from '../models/book.model';
import { Author } from '../models/author.model';

@Resolver((of) => Book)
export class BooksResolver {
  constructor(private prismaService: PrismaService) {}

  @Query((returns) => [Book])
  books() {
    return this.prismaService.book.findMany({
      include: { genre: true, Author: true, reviews: true, OrderDetail: true },
    });
  }

  @Query((returns) => Book, { name: 'author' })
  async getBook(@Args('id', { type: () => Int }) id: number) {
    return this.prismaService.book.findFirst();
  }

  //Query books by genre name
  @Query((returns) => [Book])
  async getBooksByGenre(
    @Args('genreName', { type: () => String }) genreName: string,
  ) {
    return this.prismaService.book.findMany({
      where: {
        genre: {
          name: genreName,
        },
      },
      include: { genre: true, Author: true, reviews: true, OrderDetail: true },
    });
  }
}
