import { Inject, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Kolay Asistan sağlıklı günler diler... ' + new Date();
  }
}
