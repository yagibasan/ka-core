import { Injectable } from '@nestjs/common';
import * as Parse from 'parse/node';
import { CatalogUpdateDto } from '../../tools/dtos/CatalogUpdateDTO';
import { CatalogCreateDto } from '../../tools/dtos/CatalogCreateDto';

@Injectable()
export class ParseService<T> {
  constructor(protected readonly collectionName: string) {
    Parse.initialize(
      process.env.APP_ID,
      process.env.JAVASCRIPT_KEY,
      process.env.MASTER_KEY,
    );
    Parse.serverURL = process.env.API_URL;
  }

  async GetByCode(code: string): Promise<T> {
    try {
      const dbObject: Parse.Object = Parse.Object.extend(this.collectionName);
      const query: Parse.Query = new Parse.Query(dbObject);
      query.equalTo('code', code);
      query.equalTo('status', true);

      const result: Parse.Object = await query.first();
      return result;
    } catch (error: any) {
      throw error;
    }
  }

  async GetByName(name: string): Promise<T> {
    try {
      const dbObject: Parse.Object = Parse.Object.extend(this.collectionName);
      const query: Parse.Query = new Parse.Query(dbObject);
      query.equalTo('name', name);
      const result: Parse.Object = await query.first();
      return result;
    } catch (error: any) {
      throw error;
    }
  }

  async GetByObjectId(id: string): Promise<T> {
    try {
      const dbObject: Parse.Object = Parse.Object.extend(this.collectionName);
      const query: Parse.Query = new Parse.Query(dbObject);
      const result: Parse.Object = await query.get(id);
      return result;
    } catch (error: any) {
      throw error;
    }
  }

  async GetAll(): Promise<T[]> {
    const dbObject: Parse.Object = Parse.Object.extend(this.collectionName);
    const query: Parse.Query = new Parse.Query(dbObject);
    query.equalTo('status', true);
    try {
      const result: Parse.Object[] = await query.find();
      return result;
    } catch (error: any) {
      throw error;
    }
  }

  async Delete(id: string): Promise<any> {
    try {
      const query: Parse.Query = new Parse.Query(this.collectionName);
      const object: Parse.Object = await query.get(id);
      const response: any = await object.destroy();
      return response;
    } catch (error: any) {
      throw error;
    }
  }
}
