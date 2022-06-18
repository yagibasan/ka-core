import { Module } from '@nestjs/common';
import { DrugConsumeController } from './DrugConsume.controller';
import { DrugConsumeService } from './DrugConsume.service';

@Module({
  imports: [],
  controllers: [DrugConsumeController],
  providers: [DrugConsumeService],
})
export class DrugConsumeModule {}
