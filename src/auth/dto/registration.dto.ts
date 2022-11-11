import { IsEmail, IsString } from 'class-validator';

export class RegistrationDto {
  @IsString()
  readonly firstName: string;

  @IsString()
  readonly lastName: string;

  @IsEmail()
  readonly email: string;

  @IsString()
  readonly password: string;
  
  @IsString()
  readonly role: string;
}
