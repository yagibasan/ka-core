import { IsNotEmpty, Length } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CityDto {
  @IsNotEmpty()
  @ApiProperty()
  id: string;
  @IsNotEmpty()
  @ApiProperty()
  code: string;
  @IsNotEmpty()
  @Length(2, 256)
  @ApiProperty()
  name: string;

  @ApiProperty()
  items: Object[];
}
