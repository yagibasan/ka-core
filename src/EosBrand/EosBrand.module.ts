import { Module } from '@nestjs/common';
import { EosBrandController } from './EosBrand.controller';
import { EosBrandService } from './EosBrand.service';

@Module({
  imports: [],
  controllers: [EosBrandController],
  providers: [EosBrandService],
})
export class EosBrandModule {}
