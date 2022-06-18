import { Module } from '@nestjs/common';
import { DrugWhereFromController } from './DrugWhereFrom.controller';
import { DrugWhereFromService } from './DrugWhereFrom.service';

@Module({
  imports: [],
  controllers: [DrugWhereFromController],
  providers: [DrugWhereFromService],
})
export class DrugWhereFromModule {}
