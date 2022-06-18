import { IsNotEmpty, Length } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CatalogUpdateDto {
  @ApiProperty()
  id: string;
  @ApiProperty()
  id2: string;

  @IsNotEmpty()
  @ApiProperty()
  code: string;

  @IsNotEmpty()
  @Length(2, 256)
  @ApiProperty()
  name: string;

  @IsNotEmpty()
  @ApiProperty()
  status: boolean;

  @ApiProperty()
  items: object[];
}
