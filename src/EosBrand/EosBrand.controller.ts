import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Put,
  Delete,
} from '@nestjs/common';
import { EosBrandService } from './EosBrand.service';
import { EosBrandDto } from 'tools/dtos/EosBrandDto';
import { CatalogUpdateDto } from 'tools/dtos/CatalogUpdateDto';
import { CatalogCreateDto } from 'tools/dtos/CatalogCreateDto';

@Controller('drugCategory')
export class EosBrandController {
  constructor(private readonly EosBrandService: EosBrandService) {}

  @Get('getByCode/:code')
  async getByCode(@Param() params: any): Promise<EosBrandDto> {
    return this.EosBrandService.GetByCode(params.code);
  }

  @Get('getByName/:name')
  async getByName(@Param() params: any): Promise<EosBrandDto> {
    return this.EosBrandService.GetByName(params.name);
  }

  @Get('getByObjectId/:id')
  async getByObjectId(@Param() params: any): Promise<EosBrandDto> {
    return this.EosBrandService.GetByObjectId(params.id);
  }

  @Get('getAll')
  async getAll(): Promise<EosBrandDto[]> {
    return this.EosBrandService.GetAll();
  }

  @Put()
  async update(
    @Body() CatalogUpdateDto: CatalogUpdateDto,
  ): Promise<EosBrandDto> {
    return this.EosBrandService.Update(CatalogUpdateDto);
  }

  @Post()
  async create(
    @Body() CatalogCreateDto: CatalogCreateDto,
  ): Promise<EosBrandDto> {
    return this.EosBrandService.Create(CatalogCreateDto);
  }

  @Delete('/:id')
  async delete(@Param() params: any): Promise<EosBrandDto> {
    return this.EosBrandService.Delete(params.id);
  }
}
