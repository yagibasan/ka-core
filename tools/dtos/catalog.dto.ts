import { IsNotEmpty, Length } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { AuditModel } from '../models/audit.model';

export class CatalogDto {
  @IsNotEmpty()
  @Length(2, 256)
  @ApiProperty()
  caption: string;

  @IsNotEmpty()
  @Length(2, 256)
  @ApiProperty()
  name: string;

  @IsNotEmpty()
  @Length(2, 256)
  @ApiProperty()
  code: string;

  @ApiProperty()
  items: Object[];

  audit: AuditModel;

}

