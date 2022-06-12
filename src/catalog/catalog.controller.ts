import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Put,
  Delete,
} from '@nestjs/common';
import { CatalogService } from './catalog.service';
import { CatalogDto } from 'tools/dtos/catalog.dto';
import { CatalogModel } from 'tools/models/catalog.model';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Catalogs')
@Controller('catalog')
export class CatalogController {
  constructor(private readonly catalogService: CatalogService) { }

  @Post()
  async CreateCatalog(@Body() body: CatalogDto): Promise<CatalogModel> {
    return this.catalogService.create(body);
  }

  @Get()
  async getAllCatalogs(): Promise<CatalogModel[]> {
    return this.catalogService.findAll();
  }

  @Get(':id')
  async GetCatalog(@Param() params): Promise<CatalogModel> {
    return this.catalogService.findOne(params.id);
  }

  @Put(':id')
  async updateCatalog(
    @Param('id') id: string,
    @Body() catalogDto: CatalogDto,
  ): Promise<CatalogModel> {
    return this.catalogService.update(id, catalogDto);
  }

  @Delete(':id')
  async removeCatalog(@Param('id') id: string): Promise<CatalogModel> {
    return this.catalogService.delete(id);
  }
}
