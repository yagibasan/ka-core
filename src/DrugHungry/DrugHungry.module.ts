import { Module } from '@nestjs/common';
import { DrugHungryController } from './DrugHungry.controller';
import { DrugHungryService } from './DrugHungry.service';

@Module({
  imports: [],
  controllers: [DrugHungryController],
  providers: [DrugHungryService],
})
export class DrugHungryModule {}
