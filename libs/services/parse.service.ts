import { Injectable } from '@nestjs/common';
import * as Parse from 'parse/node';
import { CatalogCreateDto } from 'tools/dtos/CatalogCreateDto';
import { CatalogUpdateDto } from 'tools/dtos/CatalogUpdateDto';

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

  async Update(catalogUpdateDto: CatalogUpdateDto): Promise<T> {
    try {
      const dbObject: Parse.Object = Parse.Object.extend(this.collectionName);
      const query: Parse.Query = new Parse.Query(dbObject);
      let object: Parse.Object = await query.get(catalogUpdateDto.id);
      object.set('name', catalogUpdateDto.name);
      object.set('code', catalogUpdateDto.code);
      object.set('status', catalogUpdateDto.status);
      const response = await object.save();
      return response;
    } catch (error: any) {
      throw error;
    }
  }

  async Create(catalogCreateDto: CatalogCreateDto): Promise<T> {
    try {
      const object: Parse.Object = new Parse.Object(this.collectionName);
      object.set('name', catalogCreateDto.name);
      object.set('code', catalogCreateDto.code);
      object.set('status', catalogCreateDto.status);
      object.set('order', catalogCreateDto.order);
      if (catalogCreateDto.hasOwnProperty('items'))
        object.set('items', catalogCreateDto.items);
      const response: Parse.Object = await object.save();
      return response;
    } catch (error: any) {
      console.log(error);
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
