import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreatePublicationDto } from 'src/publication/dto/create-publication.dto';

@Injectable()
export class PrismaPublicationRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: Omit<CreatePublicationDto, 'userId'>, userId: number) {
    return await this.prisma.post.create({
      data: {
        ...data,
        user: { connect: { id: userId } },
      },
    });
  }

  async findByUserId(userId: number) {
    return await this.prisma.post.findMany({ where: { userId: userId } });
  }

  async findByTitle(title: string) {
    return await this.prisma.post.findFirst({ where: { title } });
  }
}
