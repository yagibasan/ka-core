import { Injectable } from '@nestjs/common';
import { DrugWhereFromDto } from 'tools/dtos/DrugWhereFromDto';
import { ParseService } from 'libs/services/parse.service';

@Injectable()
export class DrugWhereFromService extends ParseService<DrugWhereFromDto> {
  constructor() {
    super('DrugWhereFrom');
  }
}
