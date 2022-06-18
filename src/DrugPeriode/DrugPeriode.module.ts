import { Module } from '@nestjs/common';
import { DrugPeriodeController } from './DrugPeriode.controller';
import { DrugPeriodeService } from './DrugPeriode.service';

@Module({
  imports: [],
  controllers: [DrugPeriodeController],
  providers: [DrugPeriodeService],
})
export class DrugPeriodeModule {}
