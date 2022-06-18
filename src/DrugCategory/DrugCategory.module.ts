import { Module } from '@nestjs/common';
import { DrugCategoryController } from './DrugCategory.controller';
import { DrugCategoryService } from './DrugCategory.service';

@Module({
  imports: [],
  controllers: [DrugCategoryController],
  providers: [DrugCategoryService],
})
export class DrugCategoryModule {}
