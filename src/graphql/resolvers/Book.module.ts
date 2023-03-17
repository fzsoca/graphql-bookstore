import { PrismaModule } from './../../prisma/prisma.module';
import { Module } from '@nestjs/common';
import { BooksResolver } from './Book.resolver';

@Module({
  imports: [PrismaModule],
  providers: [BooksResolver],
})
export class BooksModule {}
