import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Put,
  Delete,
} from '@nestjs/common';
import { DrugWithService } from './DrugWith.service';
import { DrugWithDto } from 'tools/dtos/DrugWithDto';
import { CatalogUpdateDto } from 'tools/dtos/CatalogUpdateDto';
import { CatalogCreateDto } from 'tools/dtos/CatalogCreateDto';

@Controller('drugCategory')
export class DrugWithController {
  constructor(private readonly DrugWithService: DrugWithService) {}

  @Get('getByCode/:code')
  async getByCode(@Param() params: any): Promise<DrugWithDto> {
    return this.DrugWithService.GetByCode(params.code);
  }

  @Get('getByName/:name')
  async getByName(@Param() params: any): Promise<DrugWithDto> {
    return this.DrugWithService.GetByName(params.name);
  }

  @Get('getByObjectId/:id')
  async getByObjectId(@Param() params: any): Promise<DrugWithDto> {
    return this.DrugWithService.GetByObjectId(params.id);
  }

  @Get('getAll')
  async getAll(): Promise<DrugWithDto[]> {
    return this.DrugWithService.GetAll();
  }

  @Put()
  async update(
    @Body() CatalogUpdateDto: CatalogUpdateDto,
  ): Promise<DrugWithDto> {
    return this.DrugWithService.Update(CatalogUpdateDto);
  }

  @Post()
  async create(
    @Body() CatalogCreateDto: CatalogCreateDto,
  ): Promise<DrugWithDto> {
    return this.DrugWithService.Create(CatalogCreateDto);
  }

  @Delete('/:id')
  async delete(@Param() params: any): Promise<DrugWithDto> {
    return this.DrugWithService.Delete(params.id);
  }
}
