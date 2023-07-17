import { ConflictException, Injectable } from '@nestjs/common';
import { CreatePublicationDto } from './dto/create-publication.dto';
import { PublicationRepository } from './repository/publications.repository';

@Injectable()
export class PublicationService {
  constructor(private readonly publicationRepository: PublicationRepository) {}

  async create(createPublication: CreatePublicationDto, userId: number) {
    const post = await this.publicationRepository.findByTitle(
      createPublication.title,
    );

    if (post) throw new ConflictException('Title already registered.');

    return await this.publicationRepository.create(createPublication, userId);
  }

  async findAllByUser(userId: number) {
    return await this.publicationRepository.findByUserId(userId);
  }

  findOne(id: number) {
    return `This action returns a #${id} publication`;
  }

  update(id: number) {
    return `This action updates a #${id} publication`;
  }

  remove(id: number) {
    return `This action removes a #${id} publication`;
  }
}
