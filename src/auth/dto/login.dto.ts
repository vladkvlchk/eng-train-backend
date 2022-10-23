import { IsEmail, IsString, MinLength } from "class-validator";


export class LoginDto{
  @IsString()
  readonly username: string;

  @IsString()
  @MinLength(8, {message : "Too short password"})
  readonly password: string;
}