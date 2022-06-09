import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Kolay Asistan sağlıklı günler diler... ' + new Date();
  }
}
