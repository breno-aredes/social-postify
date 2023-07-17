import { Module } from '@nestjs/common';
import { PublicationService } from './publication.service';
import { PublicationController } from './publication.controller';
import { PublicationRepository } from './repository/publications.repository';
import { PrismaPublicationRepository } from './repository/implementations/prismaPublications.repository';
import { AuthModule } from 'src/auth/auth.module';
import { UsersModule } from 'src/users/users.module';

@Module({
  controllers: [PublicationController],
  providers: [
    PublicationService,
    {
      provide: PublicationRepository,
      useClass: PrismaPublicationRepository,
    },
  ],
  imports: [AuthModule, UsersModule],
})
export class PublicationModule {}
