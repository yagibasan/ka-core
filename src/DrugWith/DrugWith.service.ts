import { Injectable } from '@nestjs/common';
import { DrugWithDto } from 'tools/dtos/DrugWithDto';
import { ParseService } from 'libs/services/parse.service';

@Injectable()
export class DrugWithService extends ParseService<DrugWithDto> {
  constructor() {
    super('DrugWith');
  }
}
