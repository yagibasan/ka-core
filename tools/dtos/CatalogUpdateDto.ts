import { IsNotEmpty, Length } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CatalogUpdateDto {
  @IsNotEmpty()
  @ApiProperty()
  catalogCode: string;

  @IsNotEmpty()
  @ApiProperty()
  catalogName: string;

  @IsNotEmpty()
  @ApiProperty()
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
