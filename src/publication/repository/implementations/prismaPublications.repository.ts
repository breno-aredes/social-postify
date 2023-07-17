import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreatePublicationDto } from 'src/publication/dto/create-publication.dto';

@Injectable()
export class PrismaPublicationRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: CreatePublicationDto) {
    return await this.prisma.post.create({ data: data });
  }
}
