import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Put,
  Delete,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CatalogService } from './Catalog.service';
import { ApiTags } from '@nestjs/swagger';
import { CatalogDto } from 'tools/dtos/CatalogDto';
import { CatalogCreateDto } from 'tools/dtos/CatalogCreateDto';
import { CatalogUpdateDto } from 'tools/dtos/CatalogUpdateDto';
import { Expose, Transform } from 'class-transformer/types/decorators';

@ApiTags('Catalog')
@Controller('catalog')
export class CatalogController {
  constructor(private readonly catalogService: CatalogService) {}

  @Get('getByCode/:catalogCode/:itemCode')
  async getByCode(@Param() params: any): Promise<CatalogDto> {
    return this.catalogService.GetByCode(params.catalogCode, params.itemCode);
  }

  @Get('getByName/:catalogCode/:itemName')
  async getByName(@Param() params: any): Promise<CatalogDto> {
    return this.catalogService.GetByName(params.catalogCode, params.itemName);
  }

  @Get('getByObjectId/:id')
  async getByObjectId(@Param() params: any): Promise<CatalogDto> {
    return this.catalogService.GetByObjectId(params.id);
  }

  @Get('getAll')
  async getAll(): Promise<CatalogDto[]> {
    return this.catalogService.GetAll();
  }
  @Get('getCatalogList')
  async getCatalogList(): Promise<any[]> {
    return this.catalogService.GetCatalogList();
  }

  @Get('getAllCatalog/:catalogCode')
  async GetAllCatalog(@Param() params: any): Promise<CatalogDto[]> {
    console.log(params.catalogCode);
    return this.catalogService.GetAllCatalog(params.catalogCode);
  }
  @Put('/:objectId')
  async update(
    @Param() param: any,
    @Body() CatalogUpdateDto: CatalogUpdateDto,
  ): Promise<CatalogDto> {
    return this.catalogService.Update(param.objectId, CatalogUpdateDto);
  }

  @Post()
  async create(
    @Body() catalogCreateDto: CatalogCreateDto,
  ): Promise<CatalogDto> {
    return this.catalogService.Create(catalogCreateDto);
  }

  @Delete('/:objectId')
  async delete(@Param() params: any): Promise<CatalogDto> {
    return this.catalogService.Delete(params.objectId);
  }
}
