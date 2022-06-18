import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { CityController } from './City.controller';
import { CityService } from './City.service';

@Module({
  imports: [ConfigModule],
  controllers: [CityController],
  providers: [CityService],
})
export class CityModule {}
