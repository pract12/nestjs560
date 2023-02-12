import { IsEmpty, IsNotEmpty, IsString, MaxLength, MinLength } from 'class-validator';

export class TaskDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  @MaxLength(65)
  taskName: string;

  @IsNotEmpty()
  userId: string;

}