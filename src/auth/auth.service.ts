import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthSigninDTO } from './dto/auth-signin.dto';
import { UsersService } from 'src/users/users.service';
import { AuthSignUpDTO } from './dto/auth-signup.dto';
import * as bcrypt from 'bcrypt';
import { UsersRepository } from 'src/users/repository/users.repository';
import { JwtService } from '@nestjs/jwt';
import { User } from '@prisma/client';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly usersRepository: UsersRepository,
    private readonly jwtService: JwtService,
  ) {}

  async signup(body: AuthSignUpDTO) {
    const user = await this.usersService.create(body);
    return this.createToken(user);
  }

  async signin({ email, password }: AuthSigninDTO) {
    const user = await this.usersRepository.findUserByEmail(email);
    if (!user) throw new UnauthorizedException('Email or password invalid');

    const validPassword = bcrypt.compareSync(password, user.password);
    if (!validPassword)
      throw new UnauthorizedException('Email or password invalid');

    return this.createToken(user);
  }

  createToken(user: User) {
    const token = this.jwtService.sign(
      {
        name: user.name,
        email: user.email,
      },
      {
        expiresIn: '7 days',
        subject: String(user.id),
        issuer: 'social postify',
        audience: 'users',
      },
    );

    return { token };
  }
}
