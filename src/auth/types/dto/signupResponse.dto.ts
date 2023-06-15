import { IsDate, IsEmail, IsString } from 'class-validator';

export class SignupResponseDto {
  @IsEmail()
  @IsString()
  email: string;
  @IsString()
  createdAt: Date;
}
