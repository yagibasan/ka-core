import { IsEmail, IsMobilePhone, IsNotEmpty, Length } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  @Length(3, 50)
  username: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @Length(3, 50)
  name: string;

  @IsNotEmpty()
  @Length(3, 50)
  surname: string;

  @IsNotEmpty()
  @IsMobilePhone(3, 50)
  phone: string;

  @IsNotEmpty()
  @Length(4, 12)
  password: string;
}
