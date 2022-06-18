import { Injectable } from '@nestjs/common';
import { PrinterBrandDto } from 'tools/dtos/PrinterBrandDto';
import { ParseService } from 'libs/services/parse.service';

@Injectable()
export class PrinterBrandService extends ParseService<PrinterBrandDto> {
  constructor() {
    super('PrinterBrand');
  }
}
