import { Injectable } from '@nestjs/common';
import { DrugCategoryDto } from 'tools/dtos/DrugCategoryDto';
import { ParseService } from 'libs/services/parse.service';

@Injectable()
export class DrugCategoryService extends ParseService<DrugCategoryDto> {
  constructor() {
    super('DrugCategory');
  }
}
