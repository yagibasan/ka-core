import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Document } from 'mongoose';
import { CatalogModel } from 'tools/models/catalog.model';
import { CatalogDto } from 'tools/dtos/catalog.dto';
import { ResourceService } from 'libs/services/resource.service';
import { AuditModel } from 'tools/models/audit.model';


interface CatalogModelDoc extends AuditModel, CatalogModel, Document { }


@Injectable()
export class CatalogService extends ResourceService<CatalogModelDoc, CatalogDto> {
  constructor(
    @InjectModel('Catalog')
    catalogMongo: Model<CatalogModelDoc>,
  ) {
    super(catalogMongo);
  }

}
