import {
  Module,
  NestModule,
  MiddlewareConsumer,
  RequestMethod,
} from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './user/users.module';
import environment from 'tools/environment/environment';
import { LibsModule } from 'libs/libs.module';

import { TokenMiddleware } from 'libs/middlewares/token.middleware';
import { APP_GUARD } from '@nestjs/core';
import { AuthGuard } from 'libs/guards/auth.guard';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Users } from 'tools/entities/Users';
import { MobileUsers } from 'tools/entities/MobileUsers';
import { Pharmacies } from 'tools/entities/Pharmacies';
import { Agreements } from 'tools/entities/Agreements';
import { RolePermissions } from 'tools/entities/RolePermissions';
import { Roles } from 'tools/entities/Roles';
import { UserAgreements } from 'tools/entities/UserAgreements';
import { UserApprovals } from 'tools/entities/UserApprovals';
import { UserRoles } from 'tools/entities/UserRoles';
import { UserTransactions } from 'tools/entities/UserTransactions';
import { Permissions } from 'tools/entities/Permissions';

@Module({
  imports: [
    UsersModule,
    LibsModule,
    TypeOrmModule.forRoot({
      entities: [Users, MobileUsers, Pharmacies, Agreements, Permissions, RolePermissions, Roles, UserAgreements, UserApprovals, UserRoles, UserTransactions],
      type: 'mysql',
      host: 'host12.pozitifsunucu.com',
      port: 3306,
      username: 'ahmetyag_kolayasistan',
      password: '3a0UQ98K!u-L',
      database: 'ahmetyag_kolayasistanusers',
      autoLoadEntities: true,
      synchronize: true,
    }),
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
