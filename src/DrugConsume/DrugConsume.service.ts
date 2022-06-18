import { Injectable } from '@nestjs/common';
import { DrugConsumeDto } from 'tools/dtos/DrugConsumeDto';
import { ParseService } from 'libs/services/parse.service';

@Injectable()
export class DrugConsumeService extends ParseService<DrugConsumeDto> {
  constructor() {
    super('DrugConsume');
  }
}
