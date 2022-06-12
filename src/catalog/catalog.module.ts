import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CatalogSchema } from 'tools/models/catalog.model';
import { CatalogController } from './catalog.controller';
import { CatalogService } from './catalog.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Catalog', schema: CatalogSchema }])],
  controllers: [CatalogController],
  providers: [CatalogService],
})
export class CatalogModule { }
