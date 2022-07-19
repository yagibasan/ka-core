import { IsEmail, IsMobilePhone, IsNotEmpty, Length } from 'class-validator';

export class UpdateUserDto {
  @IsNotEmpty()
  @Length(3, 50)
  username: string;

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
  status: boolean;
}
