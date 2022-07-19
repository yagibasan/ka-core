import { IsEmail, IsMobilePhone, IsNotEmpty, Length } from 'class-validator';

export class UserDto {
  username: string;
  email: string;
  name: string;
  surname: string;
  phone: string;
  id: string;
  createdAt: Date;
  updatedAt: Date;
  sessionToken: string;
  objectId: string;
  status: boolean;
}
