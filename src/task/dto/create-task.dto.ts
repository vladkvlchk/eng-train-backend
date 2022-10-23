import { IsNumber, IsString, MinLength } from 'class-validator';

export class CreateTaskDto {
  @IsString()
  @MinLength(7, { message: 'Too short question' })
  question: string;

  readonly options: [
    {
      text: string;
      veracity: boolean;
    },
  ];

  @IsNumber()
  readonly rating: number;
}
