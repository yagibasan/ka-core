import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Put,
  Delete,
} from '@nestjs/common';
import { PrinterBrandService } from './PrinterBrand.service';
import { ApiTags } from '@nestjs/swagger';
import { PrinterBrandDto } from 'tools/dtos/PrinterBrandDto';
import { CatalogUpdateDto } from 'tools/dtos/CatalogUpdateDto';
import { CatalogCreateDto } from 'tools/dtos/CatalogCreateDto';

@ApiTags('Printer Brand')
@Controller('printerBrand')
export class PrinterBrandController {
  constructor(private readonly PrinterBrandService: PrinterBrandService) {}

  @Get('getByCode/:code')
  async getByCode(@Param() params: any): Promise<PrinterBrandDto> {
    return this.PrinterBrandService.GetByCode(params.code);
  }

  @Get('getByName/:name')
  async getByName(@Param() params: any): Promise<PrinterBrandDto> {
    return this.PrinterBrandService.GetByName(params.name);
  }

  @Get('getByObjectId/:id')
  async getByObjectId(@Param() params: any): Promise<PrinterBrandDto> {
    return this.PrinterBrandService.GetByObjectId(params.id);
  }

  @Get('getAll')
  async getAll(): Promise<PrinterBrandDto[]> {
    return this.PrinterBrandService.GetAll();
  }

  @Put()
  async update(
    @Body() CatalogUpdateDto: CatalogUpdateDto,
  ): Promise<PrinterBrandDto> {
    return this.PrinterBrandService.Update(CatalogUpdateDto);
  }

  @Post()
  async create(
    @Body() CatalogCreateDto: CatalogCreateDto,
  ): Promise<PrinterBrandDto> {
    return this.PrinterBrandService.Create(CatalogCreateDto);
  }

  @Delete('/:id')
  async delete(@Param() params: any): Promise<PrinterBrandDto> {
    return this.PrinterBrandService.Delete(params.id);
  }
}
