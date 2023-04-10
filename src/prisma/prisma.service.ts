import { Prisma, PrismaClient } from '@prisma/client';
import { INestApplication, Injectable } from '@nestjs/common';

@Injectable()
export class PrismaService extends PrismaClient {
  async enableShutdownHooks(app: INestApplication) {
    this.$on('beforeExit', async () => {
      await app.close();
    });
  }

  constructor() {
    super({ log: ['query', 'info', `warn`, `error`] });
    this.$on('query' as any, (e: any) => {
      console.log('Query: ' + e.query + ' ' + e.params);
    });
  }
}
