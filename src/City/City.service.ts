import { Injectable } from '@nestjs/common';
import { CityDto } from 'tools/dtos/CityDto';
import { ParseService } from 'libs/services/parse.service';

@Injectable()
export class CityService extends ParseService<CityDto> {
  constructor() {
    super('City');
  }
}
