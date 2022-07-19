import { Inject, Injectable } from '@nestjs/common';
import { UserDto } from 'tools/dtos/User/UserDto';
import { ParseService } from 'libs/services/parse.service';
import { CreateUserDto } from 'tools/dtos/User/CreateUserDto';
import * as Parse from 'parse/node';
import { LoginUserDto } from 'tools/dtos/User/LoginUserDto';
import { ResetPasswordDto } from 'tools/dtos/User/ResetPasswordDto';
import { UpdateUserDto } from 'tools/dtos/User/UpdateUserDto';
import { plainToClass } from 'class-transformer';
import { VerifyEmailDto } from 'tools/dtos/User/VerifyEmailDto';

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

      const userDto: UserDto = new UserDto();
      userDto.username = user.get('username');
      userDto.sessionToken = user.get('sessionToken');
      userDto.objectId = user.get('objectId');

      return userDto;

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
      var userQuery = new Parse.Query(collectionName);
      userQuery.equalTo('objectId', id);
      var user = await userQuery.first();

      if (updateUserDto.name !== undefined)
        user.set('name', updateUserDto.name);
      if (updateUserDto.phone !== undefined)
        user.set('phone', updateUserDto.phone);
      if (updateUserDto.surname !== undefined)
        user.set('surname', updateUserDto.surname);
      if (updateUserDto.username !== undefined)
        user.set('username', updateUserDto.username);

      const response: Parse.Object = await user.save(null, {
        useMasterKey: true,
      });

      return this.plainToDto(response);
    } catch (error: any) {
      console.log(error);
      throw error;
    }
  }

  async VerifyingEmail(loginDto: VerifyEmailDto): Promise<any> {
    try {
      return true;
    } catch (error: any) {
      console.log(error);
      throw error;
    }
  }

  async SetStatus(id: string, status: boolean): Promise<any> {
    try {
      var userQuery = new Parse.Query(collectionName);
      userQuery.equalTo('objectId', id);
      var user = await userQuery.first();
      user.set('status', status);
      const response: Parse.Object = await user.save(null, {
        useMasterKey: true,
      });

      return this.plainToDto(response);
    } catch (error: any) {
      console.log(error);
      throw error;
    }
  }

  plainToDto(response: Parse.Object): UserDto {
    const user: UserDto = new UserDto();
    user.createdAt = response.get('createdAt');
    user.email = response.get('email');
    user.id = response.get('id');
    user.name = response.get('name');
    user.surname = response.get('surname');
    user.updatedAt = response.get('updatedAt');
    user.username = response.get('username');
    user.objectId = response.get('objectId');
    user.status = response.get('status');

    return user;
  }
}
