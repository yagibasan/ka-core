import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Put,
  Delete,
} from '@nestjs/common';
import { DrugPeriodeService } from './DrugPeriode.service';
import { ApiTags } from '@nestjs/swagger';
import { DrugPeriodeDto } from 'tools/dtos/DrugPeriodeDto';
import { CatalogUpdateDto } from 'tools/dtos/CatalogUpdateDto';
import { CatalogCreateDto } from 'tools/dtos/CatalogCreateDto';

@ApiTags('Drug Periode')
@Controller('drugPeriode')
export class DrugPeriodeController {
  constructor(private readonly DrugPeriodeService: DrugPeriodeService) {}

  @Get('getByCode/:code')
  async getByCode(@Param() params: any): Promise<DrugPeriodeDto> {
    return this.DrugPeriodeService.GetByCode(params.code);
  }

  @Get('getByName/:name')
  async getByName(@Param() params: any): Promise<DrugPeriodeDto> {
    return this.DrugPeriodeService.GetByName(params.name);
  }

  @Get('getByObjectId/:id')
  async getByObjectId(@Param() params: any): Promise<DrugPeriodeDto> {
    return this.DrugPeriodeService.GetByObjectId(params.id);
  }

  @Get('getAll')
  async getAll(): Promise<DrugPeriodeDto[]> {
    return this.DrugPeriodeService.GetAll();
  }

  @Put()
  async update(
    @Body() CatalogUpdateDto: CatalogUpdateDto,
  ): Promise<DrugPeriodeDto> {
    return this.DrugPeriodeService.Update(CatalogUpdateDto);
  }

  @Post()
  async create(
    @Body() CatalogCreateDto: CatalogCreateDto,
  ): Promise<DrugPeriodeDto> {
    return this.DrugPeriodeService.Create(CatalogCreateDto);
  }

  @Delete('/:id')
  async delete(@Param() params: any): Promise<DrugPeriodeDto> {
    return this.DrugPeriodeService.Delete(params.id);
  }
}
