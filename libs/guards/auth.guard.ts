import {
  Injectable,
  CanActivate,
  ExecutionContext,
  HttpException,
  HttpStatus,
  Inject,
  Module,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private readonly reflector: Reflector,

  ) { }

  canActivate(context: ExecutionContext): boolean {



    const request = context.switchToHttp().getRequest();
    //const user = request.user.user; 
    return true;
  }

  async isAllowed(
    allowedRoles

  ) {
    const allUsersRoles = [];


    const hasRole = allUsersRoles.some(role => allowedRoles.includes(role));
    return hasRole;
  }
}
