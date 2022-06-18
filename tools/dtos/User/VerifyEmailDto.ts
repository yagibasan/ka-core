import { IsEmail, IsMobilePhone, IsNotEmpty, Length } from 'class-validator';

export class VerifyEmailDto {
  @IsNotEmpty()
  @IsEmail()
  email: string;
}
