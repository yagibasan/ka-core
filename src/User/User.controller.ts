import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Put,
  Delete,
} from '@nestjs/common';
import { UserService } from './User.service';
import { UserDto } from 'tools/dtos//User/UserDto';
import { CreateUserDto } from 'tools/dtos/User/CreateUserDto';
import { ParseService } from 'libs/services/parse.service';
import { LoginUserDto } from 'tools/dtos/User/LoginUserDto';
import { ResetPasswordDto } from 'tools/dtos/User/ResetPasswordDto';
import { UpdateUserDto } from 'tools/dtos/User/UpdateUserDto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('User')
@Controller('user')
export class UserController extends ParseService<UserDto> {
  constructor(private readonly UserService: UserService) {
    super('_User');
  }

  @Post('signingUp')
  async signingUp(@Body() bodyDto): Promise<UserDto> {
    return this.UserService.CreateUser(bodyDto as CreateUserDto);
  }

  @Post('login')
  async login(@Body() bodyDto): Promise<UserDto> {
    return this.UserService.Login(bodyDto as LoginUserDto);
  }

  @Post('resetPassword')
  async resetPassword(@Body() bodyDto): Promise<UserDto> {
    return this.UserService.ResetPassword(bodyDto as ResetPasswordDto);
  }

  @Get('currentUser')
  async currentUser(@Body() bodyDto): Promise<UserDto> {
    return this.UserService.CurrentUser(bodyDto as LoginUserDto);
  }

  @Get('retrievingUsers')
  async retrievingUsers(): Promise<UserDto[]> {
    return this.UserService.RetrievingUsers();
  }

  @Put('updateUser/:id')
  async updateUser(
    @Param() id: string,
    updateUserDto: UpdateUserDto,
  ): Promise<UserDto[]> {
    return this.UserService.UpdateUser(id, updateUserDto);
  }

  @Delete('deleteUser/:id')
  async deleteUser(): Promise<UserDto[]> {
    return this.UserService.RetrievingUsers();
  }
}
