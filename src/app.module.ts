import {
  Module,
  NestModule,
  MiddlewareConsumer,
  RequestMethod,
} from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CityModule } from './City/City.module';
import { DrugCategoryModule } from './DrugCategory/DrugCategory.module';
import { DrugConsumeModule } from './DrugConsume/DrugConsume.module';
import { DrugFrequenceModule } from './DrugFrequence/DrugFrequence.module';
import { DrugHungryModule } from './DrugHungry/DrugHungry.module';
import { DrugPeriodeModule } from './DrugPeriode/DrugPeriode.module';
import { DrugUnitModule } from './DrugUnit/DrugUnit.module';
import { DrugWhereFromModule } from './DrugWhereFrom/DrugWhereFrom.module';
import { DrugWithModule } from './DrugWith/DrugWith.module';
import { EosBrandModule } from './EosBrand/EosBrand.module';
import { PrinterBrandModule } from './PrinterBrand/PrinterBrand.module';
import { LibsModule } from 'libs/libs.module';

import { TokenMiddleware } from 'libs/middlewares/token.middleware';
import { APP_GUARD } from '@nestjs/core';
import { AuthGuard } from 'libs/guards/auth.guard';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './User/User.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    LibsModule,
    CityModule,
    UserModule,
    DrugCategoryModule,
    DrugConsumeModule,
    DrugFrequenceModule,
    DrugHungryModule,
    DrugPeriodeModule,
    DrugUnitModule,
    DrugWhereFromModule,
    DrugWithModule,
    EosBrandModule,
    PrinterBrandModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(TokenMiddleware)
      .forRoutes({ path: '*', method: RequestMethod.ALL });
  }
}
