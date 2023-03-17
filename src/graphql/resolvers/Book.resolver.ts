import { PrismaService } from './../../prisma/prisma.service';
import { Args, Int, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { Book } from '../models/book.model';
import { PrismaPromise } from '@prisma/client';

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
}
