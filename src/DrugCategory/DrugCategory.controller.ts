import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Put,
  Delete,
} from '@nestjs/common';
import { DrugCategoryService } from './DrugCategory.service';
import { DrugCategoryDto } from 'tools/dtos/DrugCategoryDto';
import { CatalogUpdateDto } from 'tools/dtos/CatalogUpdateDto';
import { CatalogCreateDto } from 'tools/dtos/CatalogCreateDto';

@Controller('drugCategory')
export class DrugCategoryController {
  constructor(private readonly DrugCategoryService: DrugCategoryService) {}

  @Get('getByCode/:code')
  async getByCode(@Param() params: any): Promise<DrugCategoryDto> {
    return this.DrugCategoryService.GetByCode(params.code);
  }

  @Get('getByName/:name')
  async getByName(@Param() params: any): Promise<DrugCategoryDto> {
    return this.DrugCategoryService.GetByName(params.name);
  }

  @Get('getByObjectId/:id')
  async getByObjectId(@Param() params: any): Promise<DrugCategoryDto> {
    return this.DrugCategoryService.GetByObjectId(params.id);
  }

  @Get('getAll')
  async getAll(): Promise<DrugCategoryDto[]> {
    return this.DrugCategoryService.GetAll();
  }

  @Put()
  async update(
    @Body() CatalogUpdateDto: CatalogUpdateDto,
  ): Promise<DrugCategoryDto> {
    return this.DrugCategoryService.Update(CatalogUpdateDto);
  }

  @Post()
  async create(
    @Body() CatalogCreateDto: CatalogCreateDto,
  ): Promise<DrugCategoryDto> {
    return this.DrugCategoryService.Create(CatalogCreateDto);
  }

  @Delete('/:id')
  async delete(@Param() params: any): Promise<DrugCategoryDto> {
    return this.DrugCategoryService.Delete(params.id);
  }
}
