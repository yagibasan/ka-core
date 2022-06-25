import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';

export class CatalogDto {
  @ApiProperty()
  objectId: string;

  @ApiProperty()
  catalogCode: string;

  @ApiProperty()
  catalogName: string;

  @ApiProperty()
  itemCode: string;

  @ApiProperty()
  itemName: string;

  @ApiProperty()
  itemDescription: string;

  @ApiProperty()
  status: boolean;

  @ApiProperty()
  itemOrder: number;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;
}
