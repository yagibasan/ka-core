import { Module } from '@nestjs/common';
import { CatalogController } from './Catalog.controller';
import { CatalogService } from './Catalog.service';

@Module({
  imports: [],
  controllers: [CatalogController],
  providers: [CatalogService],
})
export class CatalogModule {}
