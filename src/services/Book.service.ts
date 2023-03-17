import { PrismaService } from './../prisma/prisma.service';
import { PrismaClient } from '@prisma/client';
import { INestApplication, Injectable } from '@nestjs/common';

@Injectable()
export class BookService {
  constructor(private prismaService: PrismaService) {}
}
