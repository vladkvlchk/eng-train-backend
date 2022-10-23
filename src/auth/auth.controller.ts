import { Body, Controller, Get, Post } from '@nestjs/common';

import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { RegistrationDto } from './dto/registration.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/registration')
  async registration(@Body() dto: RegistrationDto) {
    return this.authService.createUser(dto);
  }

  @Post('/login')
  async login(@Body() dto: LoginDto) {
    try {
      return this.authService.login(dto);
    } catch (error) {
      throw new Error(error.message);
    }
  }

  @Get('/users')
  async getUsers() {
    try {
      return this.authService.getAllUsers();
    } catch (error) {
      throw new Error(error.message);
    }
  }
}
