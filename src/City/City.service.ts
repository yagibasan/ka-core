import { Injectable } from '@nestjs/common';
import { CityDto } from 'tools/dtos/CityDto';
import { ParseService } from 'libs/services/parse.service';
import * as Parse from 'parse/node';

@Injectable()
export class CityService extends ParseService<CityDto> {
  constructor() {
    super('City');
  }

  async Update(dto: CityDto): Promise<CityDto> {
    try {
      const dbObject: Parse.Object = Parse.Object.extend(this.collectionName);
      const query: Parse.Query = new Parse.Query(dbObject);
      let object: Parse.Object = await query.get(dto.id);
      object.set('name', dto.name);
      object.set('code', dto.code);
      const response = await object.save();
      return response;
    } catch (error: any) {
      throw error;
    }
  }

  async Create(dto: CityDto): Promise<CityDto> {
    try {
      const object: Parse.Object = new Parse.Object(this.collectionName);
      object.set('name', dto.name);
      object.set('code', dto.code);
      if (dto.hasOwnProperty('items')) object.set('items', dto.items);
      const response: Parse.Object = await object.save();
      return response;
    } catch (error: any) {
      console.log(error);
      throw error;
    }
  }
}
