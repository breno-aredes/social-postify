import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { PublicationModule } from './publication/publication.module';

@Module({
  imports: [UsersModule, PublicationModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
