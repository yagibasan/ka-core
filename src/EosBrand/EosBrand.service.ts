import { Injectable } from '@nestjs/common';
import { EosBrandDto } from 'tools/dtos/EosBrandDto';
import { ParseService } from 'libs/services/parse.service';

@Injectable()
export class EosBrandService extends ParseService<EosBrandDto> {
  constructor() {
    super('EosBrand');
  }
}
