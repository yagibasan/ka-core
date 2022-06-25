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
import { CatalogModule } from './Catalog/Catalog.module';
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
    CatalogModule,
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
