import { Module } from '@nestjs/common';
import { PrinterBrandController } from './PrinterBrand.controller';
import { PrinterBrandService } from './PrinterBrand.service';

@Module({
  imports: [],
  controllers: [PrinterBrandController],
  providers: [PrinterBrandService],
})
export class PrinterBrandModule {}
