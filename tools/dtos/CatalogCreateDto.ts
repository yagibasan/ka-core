import { IsNotEmpty, Length } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CatalogCreateDto {
  @IsNotEmpty()
  code: string;

  @IsNotEmpty()
  @Length(2, 256)
  name: string;

  @IsNotEmpty()
  status: boolean = true;

  items: object[];

  @IsNotEmpty()
  order: number = 0;

  description: string;
}
