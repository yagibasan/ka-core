import { Injectable } from '@nestjs/common';
import { DrugFrequenceDto } from 'tools/dtos/DrugFrequenceDto';
import { ParseService } from 'libs/services/parse.service';

@Injectable()
export class DrugFrequenceService extends ParseService<DrugFrequenceDto> {
  constructor() {
    super('DrugFrequence');
  }
}
