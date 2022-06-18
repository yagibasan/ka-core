import { ApiProperty } from '@nestjs/swagger';

export class CatalogDto {
  @ApiProperty()
  id: string;
  @ApiProperty()
  code: string;
  name: string;
  description: string;
  status: boolean;
  value: number;
  createdAt: Date;
  updatedAt: Date;
}
