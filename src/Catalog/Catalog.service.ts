import { Injectable } from '@nestjs/common';
import { CatalogDto } from 'tools/dtos/CatalogDto';
import * as Parse from 'parse/node';
import { CatalogCreateDto } from 'tools/dtos/CatalogCreateDto';
import { CatalogUpdateDto } from 'tools/dtos/CatalogUpdateDTO';

@Injectable()
export class CatalogService {
  collectionName: string = 'Catalog';

  constructor() {}

  async getSequence(): Promise<number> {
    try {
      const query = new Parse.Query('Sequence');
      query.equalTo('sequenceName', 'seqCatalog');
      const result: Parse.Object = await query.first();
      const nextValue = result.get('currentValue');
      result.increment('currentValue', 1);
      result.save();
      return nextValue;
    } catch (error: any) {
      console.log(error);
      throw error;
    }
  }

  async GetByCode(catalogCode: string, code: string): Promise<CatalogDto> {
    try {
      const dbObject: Parse.Object = Parse.Object.extend(this.collectionName);
      const query: Parse.Query = new Parse.Query(dbObject);
      query.equalTo('catalogCode', catalogCode);
      query.equalTo('code', code);
      query.equalTo('status', true);

      const result: Parse.Object = await query.first();
      return result;
    } catch (error: any) {
      throw error;
    }
  }

  async GetByName(catalogCode: string, name: string): Promise<CatalogDto> {
    try {
      const dbObject: Parse.Object = Parse.Object.extend(this.collectionName);
      const query: Parse.Query = new Parse.Query(dbObject);
      query.equalTo('catalogCode', catalogCode);
      query.equalTo('name', name);
      const result: Parse.Object = await query.first();
      return result;
    } catch (error: any) {
      throw error;
    }
  }

  async GetByObjectId(id: string): Promise<CatalogDto> {
    try {
      const dbObject: Parse.Object = Parse.Object.extend(this.collectionName);
      const query: Parse.Query = new Parse.Query(dbObject);
      const result: Parse.Object = await query.get(id);
      return result;
    } catch (error: any) {
      throw error;
    }
  }

  async GetAll(): Promise<CatalogDto[]> {
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

  async GetAllCatalog(catalogCode: string): Promise<CatalogDto[]> {
    const dbObject: Parse.Object = Parse.Object.extend(this.collectionName);
    const query: Parse.Query = new Parse.Query(dbObject);
    query.equalTo('status', true);
    query.equalTo('catalogCode', true);
    try {
      const result: Parse.Object[] = await query.find();
      return result;
    } catch (error: any) {
      throw error;
    }
  }

  async Update(objectId: string, dto: CatalogUpdateDto): Promise<CatalogDto> {
    try {
      const dbObject: Parse.Object = Parse.Object.extend(this.collectionName);
      const query: Parse.Query = new Parse.Query(dbObject);
      let object: Parse.Object = await query.get(objectId);
      object.set('catalogCode', dto.catalogCode);
      object.set('catalogName', dto.catalogName);
      object.set('itemCode', dto.itemCode);
      object.set('itemName', dto.itemName);
      object.set('itemDescription', dto.itemDescription);
      object.set('status', dto.status);
      object.set('itemOrder', dto.itemOrder);
      const response = await object.save();
      return response;
    } catch (error: any) {
      throw error;
    }
  }

  async Create(dto: CatalogCreateDto): Promise<CatalogDto> {
    try {
      //const catalogId = await this.getSequence();
      const object: Parse.Object = new Parse.Object(this.collectionName);
      object.set('catalogCode', dto.catalogCode);
      object.set('catalogName', dto.catalogName);
      object.set('itemCode', dto.itemCode);
      object.set('itemName', dto.itemName);
      object.set('itemDescription', dto.itemDescription);
      object.set('status', dto.status);
      object.set('itemOrder', dto.itemOrder);

      const response: Parse.Object = await object.save();
      return response;
    } catch (error: any) {
      console.log(error);
      throw error;
    }
  }

  async Delete(objectId: string): Promise<any> {
    try {
      const query: Parse.Query = new Parse.Query(this.collectionName);
      const object: Parse.Object = await query.get(objectId);
      const response: any = await object.destroy();
      return response;
    } catch (error: any) {
      throw error;
    }
  }
}
