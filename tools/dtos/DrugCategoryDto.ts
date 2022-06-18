import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, Length } from 'class-validator';
import { CatalogDto } from './CatalogDto';

export class DrugCategoryDto extends CatalogDto {}
