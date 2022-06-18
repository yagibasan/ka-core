import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Put,
  Delete,
} from '@nestjs/common';
import { DrugWhereFromService } from './DrugWhereFrom.service';
import { DrugWhereFromDto } from 'tools/dtos/DrugWhereFromDto';
import { CatalogUpdateDto } from 'tools/dtos/CatalogUpdateDto';
import { CatalogCreateDto } from 'tools/dtos/CatalogCreateDto';

@Controller('drugCategory')
export class DrugWhereFromController {
  constructor(private readonly DrugWhereFromService: DrugWhereFromService) {}

  @Get('getByCode/:code')
  async getByCode(@Param() params: any): Promise<DrugWhereFromDto> {
    return this.DrugWhereFromService.GetByCode(params.code);
  }

  @Get('getByName/:name')
  async getByName(@Param() params: any): Promise<DrugWhereFromDto> {
    return this.DrugWhereFromService.GetByName(params.name);
  }

  @Get('getByObjectId/:id')
  async getByObjectId(@Param() params: any): Promise<DrugWhereFromDto> {
    return this.DrugWhereFromService.GetByObjectId(params.id);
  }

  @Get('getAll')
  async getAll(): Promise<DrugWhereFromDto[]> {
    return this.DrugWhereFromService.GetAll();
  }

  @Put()
  async update(
    @Body() CatalogUpdateDto: CatalogUpdateDto,
  ): Promise<DrugWhereFromDto> {
    return this.DrugWhereFromService.Update(CatalogUpdateDto);
  }

  @Post()
  async create(
    @Body() CatalogCreateDto: CatalogCreateDto,
  ): Promise<DrugWhereFromDto> {
    return this.DrugWhereFromService.Create(CatalogCreateDto);
  }

  @Delete('/:id')
  async delete(@Param() params: any): Promise<DrugWhereFromDto> {
    return this.DrugWhereFromService.Delete(params.id);
  }
}
