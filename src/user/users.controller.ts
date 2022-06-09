import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { UserCreateDto } from '../../tools/dtos/UserCreate.dto';
import { Users } from '../../tools/entities/Users';
import { UsersService } from './users.service';
import { Roles } from 'libs/decorators/role.decorator';

@ApiTags('user')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) { }

  @Post()
  @ApiResponse({ status: 201, description: 'The record has been successfully created.' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @ApiResponse({ status: 400, description: 'Bad Request.' })
  create(@Body() createUserDto: UserCreateDto): Promise<Users> {
    console.log(createUserDto);
    return this.usersService.create(createUserDto);
  }

  @Get()
  @ApiResponse({ status: 201, description: 'Records fetched' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @ApiResponse({ status: 400, description: 'Bad Request.' })
  findAll(): Promise<Users[]> {
    return this.usersService.findAll();
  }

  @Get(':id')
  @ApiResponse({ status: 201, description: 'Only unique record fetched' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @ApiResponse({ status: 400, description: 'Bad Request.' })
  findOne(@Param('id') id: string): any {
    return this.usersService.findByIds(id);
  }

  @Delete(':id')
  @ApiResponse({ status: 201, description: 'The record has been deleted.' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @ApiResponse({ status: 400, description: 'Bad Request.' })
  remove(@Param('id') id: string): any {
    return this.usersService.remove(id);
  }

  @Put(':id')
  @ApiResponse({ status: 201, description: 'The record has been updated.' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @ApiResponse({ status: 400, description: 'Bad Request.' })
  update(@Param('id') id: string, @Body() updateUserDto: UserCreateDto): Promise<Users> {
    return this.usersService.update(updateUserDto);
  }



}