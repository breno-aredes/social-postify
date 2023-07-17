import { Post } from '@prisma/client';
import { CreatePublicationDto } from '../dto/create-publication.dto';

export abstract class PublicationRepository {
  abstract create(data: CreatePublicationDto): Promise<Post>;
}
