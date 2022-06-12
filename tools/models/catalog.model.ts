import * as mongoose from 'mongoose';
import { AuditModel } from './audit.model';

export class CatalogModel {
  name: string;
  code: string;
  caption: string;
  items: object[];
  audit: AuditModel;
}

export const CatalogSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: [true, 'Katalog adı tekil olmak zorundadır'],
    required: [true, 'Katalog adı zorunludur'],
  },
  code: {
    type: String,
    unique: [true, 'Katalog kodu tekil olmak zorundadır'],
    required: [true, 'Katalog kodu zorunludur'],
  },
  caption: {
    type: String,
    unique: [true, 'Katalog başlığı tekil olmak zorundadır'],
    required: [true, 'Katalog başlığı zorunludur'],
  },
  items: {
    type: Array,
  },
  audit: {
    type: Object
  },
});
