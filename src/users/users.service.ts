import { HttpException, HttpStatus, Injectable } from '@nestjs/common';

import { UpdateUserDto } from './dto/update-user.dto';
import { CreateUserDto } from './dto/create-user.dto';
import * as bcrypt from 'bcrypt';
import { UsersRepository } from './repository/users.repository';

@Injectable()
export class UsersService {
  constructor(private readonly usersRepository: UsersRepository) {}

  async create(data: CreateUserDto) {
    const user = await this.usersRepository.findUserByEmail(data.email);

    if (user)
      throw new HttpException('User already exists', HttpStatus.CONFLICT);

    const hashPassword = bcrypt.hashSync(data.password, 10);
    return await this.usersRepository.create({
      ...data,
      password: hashPassword,
    });
  }

  async findAll() {
    return await this.usersRepository.findAll();
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
