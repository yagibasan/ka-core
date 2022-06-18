import { Injectable } from '@nestjs/common';
import { DrugUnitDto } from 'tools/dtos/DrugUnitDto';
import { ParseService } from 'libs/services/parse.service';

@Injectable()
export class DrugUnitService extends ParseService<DrugUnitDto> {
  constructor() {
    super('DrugUnit');
  }
}
