import {
  Module,
  NestModule,
  MiddlewareConsumer,
  RequestMethod,
} from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatalogModule } from './catalog/catalog.module';
import environment from 'tools/environment/environment';
import { LibsModule } from 'libs/libs.module';

import { TokenMiddleware } from 'libs/middlewares/token.middleware';
import { APP_GUARD } from '@nestjs/core';
import { AuthGuard } from 'libs/guards/auth.guard';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    CatalogModule,
    LibsModule,
    MongooseModule.forRoot(environment.mongoUrl),
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
