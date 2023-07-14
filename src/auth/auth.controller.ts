import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { AuthSigninDTO } from './dto/auth-signin.dto';
import { AuthService } from './auth.service';
import { AuthSignUpDTO } from './dto/auth-signup.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signin')
  async signin(@Body() body: AuthSigninDTO) {
    return this.authService.signin(body);
  }

  @HttpCode(200)
  @Post('signup')
  async signup(@Body() body: AuthSignUpDTO) {
    return this.authService.signup(body);
  }
}
