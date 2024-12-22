import { IsOptional, IsString, MinLength } from 'class-validator';

export class CreateNewsDto {
  @IsString()
  @MinLength(5)
  title: string;

  @IsString()
  @MinLength(20)
  content: string;

  @IsString()
  @MinLength(3)
  image: string;

  @IsString()
  // @IsIn(['a', 'b']) To define
  category: string;
}
