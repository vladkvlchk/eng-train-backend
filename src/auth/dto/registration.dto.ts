import { IsEmail, IsString } from 'class-validator';

export class RegistrationDto {
  @IsEmail()
  readonly email: string;

  @IsString()
  readonly username: string;

  @IsString()
  readonly password: string;
}
