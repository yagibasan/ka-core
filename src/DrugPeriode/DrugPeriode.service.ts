import { Injectable } from '@nestjs/common';
import { DrugPeriodeDto } from 'tools/dtos/DrugPeriodeDto';
import { ParseService } from 'libs/services/parse.service';

@Injectable()
export class DrugPeriodeService extends ParseService<DrugPeriodeDto> {
  constructor() {
    super('DrugPeriode');
  }
}
