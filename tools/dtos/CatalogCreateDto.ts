import { IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { toCode } from '../../libs/services/cast.helper';

export class CatalogCreateDto {
  @IsNotEmpty()
  @ApiProperty()
  @Transform(({ value }) => toCode(value))
  catalogCode: string;

  @IsNotEmpty()
  @ApiProperty()
  catalogName: string;

  @IsNotEmpty()
  @ApiProperty()
  @Transform(({ value }) => toCode(value))
  itemCode: string;

  @IsNotEmpty()
  @ApiProperty()
  itemName: string;

  @ApiProperty()
  itemDescription: string;

  @ApiProperty()
  status: boolean = true;

  @ApiProperty()
  itemOrder: number = 0;
}
