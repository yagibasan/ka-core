import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Put,
  Delete,
} from '@nestjs/common';
import { DrugUnitService } from './DrugUnit.service';
import { DrugUnitDto } from 'tools/dtos/DrugUnitDto';
import { CatalogUpdateDto } from 'tools/dtos/CatalogUpdateDto';
import { CatalogCreateDto } from 'tools/dtos/CatalogCreateDto';

@Controller('drugCategory')
export class DrugUnitController {
  constructor(private readonly DrugUnitService: DrugUnitService) {}

  @Get('getByCode/:code')
  async getByCode(@Param() params: any): Promise<DrugUnitDto> {
    return this.DrugUnitService.GetByCode(params.code);
  }

  @Get('getByName/:name')
  async getByName(@Param() params: any): Promise<DrugUnitDto> {
    return this.DrugUnitService.GetByName(params.name);
  }

  @Get('getByObjectId/:id')
  async getByObjectId(@Param() params: any): Promise<DrugUnitDto> {
    return this.DrugUnitService.GetByObjectId(params.id);
  }

  @Get('getAll')
  async getAll(): Promise<DrugUnitDto[]> {
    return this.DrugUnitService.GetAll();
  }

  @Put()
  async update(
    @Body() CatalogUpdateDto: CatalogUpdateDto,
  ): Promise<DrugUnitDto> {
    return this.DrugUnitService.Update(CatalogUpdateDto);
  }

  @Post()
  async create(
    @Body() CatalogCreateDto: CatalogCreateDto,
  ): Promise<DrugUnitDto> {
    return this.DrugUnitService.Create(CatalogCreateDto);
  }

  @Delete('/:id')
  async delete(@Param() params: any): Promise<DrugUnitDto> {
    return this.DrugUnitService.Delete(params.id);
  }
}
