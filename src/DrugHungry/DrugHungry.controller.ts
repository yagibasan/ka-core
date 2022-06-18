import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Put,
  Delete,
} from '@nestjs/common';
import { DrugHungryService } from './DrugHungry.service';
import { ApiTags } from '@nestjs/swagger';
import { DrugHungryDto } from 'tools/dtos/DrugHungryDto';
import { CatalogUpdateDto } from 'tools/dtos/CatalogUpdateDto';
import { CatalogCreateDto } from 'tools/dtos/CatalogCreateDto';

@ApiTags('Drug Hungry')
@Controller('drugHungry')
export class DrugHungryController {
  constructor(private readonly DrugHungryService: DrugHungryService) {}

  @Get('getByCode/:code')
  async getByCode(@Param() params: any): Promise<DrugHungryDto> {
    return this.DrugHungryService.GetByCode(params.code);
  }

  @Get('getByName/:name')
  async getByName(@Param() params: any): Promise<DrugHungryDto> {
    return this.DrugHungryService.GetByName(params.name);
  }

  @Get('getByObjectId/:id')
  async getByObjectId(@Param() params: any): Promise<DrugHungryDto> {
    return this.DrugHungryService.GetByObjectId(params.id);
  }

  @Get('getAll')
  async getAll(): Promise<DrugHungryDto[]> {
    return this.DrugHungryService.GetAll();
  }

  @Put()
  async update(
    @Body() CatalogUpdateDto: CatalogUpdateDto,
  ): Promise<DrugHungryDto> {
    return this.DrugHungryService.Update(CatalogUpdateDto);
  }

  @Post()
  async create(
    @Body() CatalogCreateDto: CatalogCreateDto,
  ): Promise<DrugHungryDto> {
    return this.DrugHungryService.Create(CatalogCreateDto);
  }

  @Delete('/:id')
  async delete(@Param() params: any): Promise<DrugHungryDto> {
    return this.DrugHungryService.Delete(params.id);
  }
}
