import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { PublicationModule } from './publication/publication.module';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [UsersModule, PublicationModule, PrismaModule, AuthModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
