import { Module } from '@nestjs/common';
import { DrugUnitController } from './DrugUnit.controller';
import { DrugUnitService } from './DrugUnit.service';

@Module({
  imports: [],
  controllers: [DrugUnitController],
  providers: [DrugUnitService],
})
export class DrugUnitModule {}
