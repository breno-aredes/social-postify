import { Post } from '@prisma/client';
import { CreatePublicationDto } from '../dto/create-publication.dto';

export abstract class PublicationRepository {
  abstract create(data: CreatePublicationDto, userId: number): Promise<Post>;

  abstract findByUserId(userId: number): Promise<Post>;

  abstract findByTitle(title: string): Promise<Post[]>;
}
