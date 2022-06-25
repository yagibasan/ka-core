import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Put,
  Delete,
} from '@nestjs/common';
import { CityService } from './City.service';
import { CityDto } from 'tools/dtos/CityDto';
import { ApiTags } from '@nestjs/swagger';
import { CatalogUpdateDto } from 'tools/dtos/CatalogUpdateDto';
import { CatalogCreateDto } from 'tools/dtos/CatalogCreateDto';

@ApiTags('Citys')
@Controller('city')
export class CityController {
  constructor(private readonly CityService: CityService) {}

  @Get('getByCode/:code')
  async getByCode(@Param() params: any): Promise<CityDto> {
    return this.CityService.GetByCode(params.code);
  }

  @Get('getByName/:name')
  async getByName(@Param() params: any): Promise<CityDto> {
    return this.CityService.GetByName(params.name);
  }

  @Get('getByObjectId/:id')
  async getByObjectId(@Param() params: any): Promise<CityDto> {
    return this.CityService.GetByObjectId(params.id);
  }

  @Get('getAll')
  async getAll(): Promise<CityDto[]> {
    return this.CityService.GetAll();
  }

  @Put()
  async update(@Body() dto: CityDto): Promise<CityDto> {
    return this.CityService.Update(dto);
  }

  @Post()
  async create(@Body() dto: CityDto): Promise<CityDto> {
    return this.CityService.Create(dto);
  }

  @Delete('/:id')
  async delete(@Param() params: any): Promise<CityDto> {
    return this.CityService.Delete(params.id);
  }
}
