import { IsEmail, IsMobilePhone, IsNotEmpty, Length } from 'class-validator';

export class ResetPasswordDto {
  @IsNotEmpty()
  @IsEmail()
  email: string;
}
