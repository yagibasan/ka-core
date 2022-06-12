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
import { FilterModel } from 'tools/models/filter.model';

@ApiTags('Catalogs')
@Controller('catalog')
export class CatalogController {
  constructor(private readonly catalogService: CatalogService) { }

  @Post()
  async create(@Body() body: CatalogDto): Promise<CatalogModel> {
    return this.catalogService.create(body);
  }

  @Get()
  async findAll(): Promise<CatalogModel[]> {
    return this.catalogService.findAll();
  }

  @Get('findById/:id')
  async findById(@Body() params): Promise<CatalogModel> {
    return this.catalogService.findOne(params.id);
  }

  @Get('findByCode/:code')
  async findByCode(@Param() params): Promise<CatalogModel> {
    return this.catalogService.findOneByCode(params.code);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() catalogDto: CatalogDto,
  ): Promise<CatalogModel> {
    return this.catalogService.update(id, catalogDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<CatalogModel> {
    return this.catalogService.delete(id);
  }
}
