import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserCreateDto } from '../../tools/dtos/UserCreate.dto';
import { Users } from '../../tools/entities/Users';
import { ResourceService } from 'libs/services/resource.service';

@Injectable()
export class UsersService extends ResourceService<Users> {
  constructor(@InjectRepository(Users) repository: Repository<Users>) {
    super(repository);
  }

  create(createUserDto: UserCreateDto): Promise<Users> {

    const dto = new Users();
    dto.email = createUserDto.email;
    dto.username = createUserDto.username;
    return this.repository.save(dto);
  }

  findAll(): Promise<Users[]> {
    return this.repository.find();
  }



}