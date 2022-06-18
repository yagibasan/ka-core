import { IsEmail, IsMobilePhone, IsNotEmpty, Length } from 'class-validator';

export class LoginUserDto {
  @IsNotEmpty()
  @Length(3, 50)
  username: string;

  @IsNotEmpty()
  @Length(4, 12)
  password: string;
}
