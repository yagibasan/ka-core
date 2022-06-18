import { Injectable } from '@nestjs/common';
import { DrugHungryDto } from 'tools/dtos/DrugHungryDto';
import { ParseService } from 'libs/services/parse.service';

@Injectable()
export class DrugHungryService extends ParseService<DrugHungryDto> {
  constructor() {
    super('DrugHungry');
  }
}
