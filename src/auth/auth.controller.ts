import { Controller, Get, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/registration')
  async registration() {
    //перевіряєм чи є такий користувач у нас в базі
  }

  @Post('/login')
  async login() {}

  @Get('/users')
  async getUsers() {
    return 'ok';
  }
}
