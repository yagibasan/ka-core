import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Put,
  Delete,
} from '@nestjs/common';
import { DrugConsumeService } from './DrugConsume.service';
import { DrugConsumeDto } from 'tools/dtos/DrugConsumeDto';
import { CatalogUpdateDto } from 'tools/dtos/CatalogUpdateDto';
import { CatalogCreateDto } from 'tools/dtos/CatalogCreateDto';

@Controller('drugCategory')
export class DrugConsumeController {
  constructor(private readonly DrugConsumeService: DrugConsumeService) {}

  @Get('getByCode/:code')
  async getByCode(@Param() params: any): Promise<DrugConsumeDto> {
    return this.DrugConsumeService.GetByCode(params.code);
  }

  @Get('getByName/:name')
  async getByName(@Param() params: any): Promise<DrugConsumeDto> {
    return this.DrugConsumeService.GetByName(params.name);
  }

  @Get('getByObjectId/:id')
  async getByObjectId(@Param() params: any): Promise<DrugConsumeDto> {
    return this.DrugConsumeService.GetByObjectId(params.id);
  }

  @Get('getAll')
  async getAll(): Promise<DrugConsumeDto[]> {
    return this.DrugConsumeService.GetAll();
  }

  @Put()
  async update(
    @Body() CatalogUpdateDto: CatalogUpdateDto,
  ): Promise<DrugConsumeDto> {
    return this.DrugConsumeService.Update(CatalogUpdateDto);
  }

  @Post()
  async create(
    @Body() CatalogCreateDto: CatalogCreateDto,
  ): Promise<DrugConsumeDto> {
    return this.DrugConsumeService.Create(CatalogCreateDto);
  }

  @Delete('/:id')
  async delete(@Param() params: any): Promise<DrugConsumeDto> {
    return this.DrugConsumeService.Delete(params.id);
  }
}
