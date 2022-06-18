import { Inject, Injectable } from '@nestjs/common';
import { UserDto } from 'tools/dtos/User/UserDto';
import { ParseService } from 'libs/services/parse.service';
import { CreateUserDto } from 'tools/dtos/User/CreateUserDto';
import * as Parse from 'parse/node';
import { LoginUserDto } from 'tools/dtos/User/LoginUserDto';
import { ResetPasswordDto } from 'tools/dtos/User/ResetPasswordDto';
import { UpdateUserDto } from 'tools/dtos/User/UpdateUserDto';

const collectionName = '_User';

@Injectable()
export class UserService extends ParseService<UserDto> {
  constructor() {
    super(collectionName);
  }

  async CreateUser(createUserDto: CreateUserDto): Promise<UserDto> {
    try {
      const object: Parse.Object = new Parse.Object(collectionName);
      object.set('email', createUserDto.email);
      object.set('password', createUserDto.password);
      object.set('phone', createUserDto.phone);
      object.set('surname', createUserDto.surname);
      object.set('username', createUserDto.username);
      object.set('name', createUserDto.name);

      const response: Parse.Object = await object.save();
      return response;
    } catch (error: any) {
      console.log(error);
      throw error;
    }
  }

  async Login(loginDto: LoginUserDto): Promise<UserDto> {
    try {
      let user: Parse.User = await Parse.User.logIn(
        loginDto.username,
        loginDto.password,
      );
      return user;
    } catch (error: any) {
      console.log(error);
      throw error;
    }
  }

  async ResetPassword(resetPasswordDto: ResetPasswordDto): Promise<any> {
    try {
      let result: any = await Parse.User.requestPasswordReset(
        resetPasswordDto.email,
      );
      return result;
    } catch (error: any) {
      throw error;
    }
  }

  async CurrentUser(loginDto: LoginUserDto): Promise<any> {
    try {
      let user: Parse.User = await Parse.User.logIn(
        loginDto.username,
        loginDto.password,
      );
      const currentUser: Parse.User = Parse.User.current();
      return currentUser;
    } catch (error: any) {
      throw error;
    }
  }

  async RetrievingUsers(): Promise<any[]> {
    try {
      const User: Parse.User = new Parse.User();
      const query: Parse.Query = new Parse.Query(User);
      let users: Parse.Object[] = await query.find();
      return users;
    } catch (error: any) {
      throw error;
    }
  }

  async UpdateUser(id: string, updateUserDto: UpdateUserDto): Promise<any> {
    try {
      const User: Parse.User = new Parse.User();
      const query: Parse.Query = new Parse.Query(User);
      let user: Parse.Object = await query.get(id);
      user.set('name', updateUserDto.name);
      user.set('phone', updateUserDto.phone);
      user.set('surname', updateUserDto.surname);
      user.set('username', updateUserDto.username);

      const response: Parse.Object = await user.save();

      return response;
    } catch (error: any) {
      throw error;
    }
  }

  // async VerifyingEmail(loginDto: VerifyEmailDto): Promise<UserDto> {
  //   try {
  //     let user: Parse.User = await Parse.User.logIn(
  //       loginDto.username,
  //       loginDto.password,
  //     );
  //     return user;
  //   } catch (error: any) {
  //     console.log(error);
  //     throw error;
  //   }
  // }
}
