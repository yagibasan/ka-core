import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Put,
  Delete,
} from '@nestjs/common';
import { DrugFrequenceService } from './DrugFrequence.service';
import { ApiTags } from '@nestjs/swagger';
import { DrugFrequenceDto } from 'tools/dtos/DrugFrequenceDto';
import { CatalogUpdateDto } from 'tools/dtos/CatalogUpdateDto';
import { CatalogCreateDto } from 'tools/dtos/CatalogCreateDto';

@ApiTags('Drug Frequence')
@Controller('drugFrequence')
export class DrugFrequenceController {
  constructor(private readonly DrugFrequenceService: DrugFrequenceService) {}

  @Get('getByCode/:code')
  async getByCode(@Param() params: any): Promise<DrugFrequenceDto> {
    return this.DrugFrequenceService.GetByCode(params.code);
  }

  @Get('getByName/:name')
  async getByName(@Param() params: any): Promise<DrugFrequenceDto> {
    return this.DrugFrequenceService.GetByName(params.name);
  }

  @Get('getByObjectId/:id')
  async getByObjectId(@Param() params: any): Promise<DrugFrequenceDto> {
    return this.DrugFrequenceService.GetByObjectId(params.id);
  }

  @Get('getAll')
  async getAll(): Promise<DrugFrequenceDto[]> {
    return this.DrugFrequenceService.GetAll();
  }

  @Put()
  async update(
    @Body() CatalogUpdateDto: CatalogUpdateDto,
  ): Promise<DrugFrequenceDto> {
    return this.DrugFrequenceService.Update(CatalogUpdateDto);
  }

  @Post()
  async create(
    @Body() CatalogCreateDto: CatalogCreateDto,
  ): Promise<DrugFrequenceDto> {
    return this.DrugFrequenceService.Create(CatalogCreateDto);
  }

  @Delete('/:id')
  async delete(@Param() params: any): Promise<DrugFrequenceDto> {
    return this.DrugFrequenceService.Delete(params.id);
  }
}
