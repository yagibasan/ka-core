import { Module } from '@nestjs/common';
import { DrugWithController } from './DrugWith.controller';
import { DrugWithService } from './DrugWith.service';

@Module({
  imports: [],
  controllers: [DrugWithController],
  providers: [DrugWithService],
})
export class DrugWithModule {}
