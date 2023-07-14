import { Injectable } from '@nestjs/common';
import { CreateUserDto } from '../../dto/create-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class PrismaUsersRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: CreateUserDto) {
    return await this.prisma.user.create({ data: data });
  }

  async findAll() {
    return await this.prisma.user.findMany({});
  }

  async findUserByEmail(email: string) {
    return await this.prisma.user.findUnique({
      where: {
        email: email,
      },
    });
  }
}
