import { Module } from '@nestjs/common';
import { DrugFrequenceController } from './DrugFrequence.controller';
import { DrugFrequenceService } from './DrugFrequence.service';

@Module({
  imports: [],
  controllers: [DrugFrequenceController],
  providers: [DrugFrequenceService],
})
export class DrugFrequenceModule {}
