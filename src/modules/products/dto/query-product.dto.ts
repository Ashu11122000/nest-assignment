import { IsOptional, IsString, IsNumberString } from 'class-validator';

export class QueryProductDto {
  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @IsNumberString()
  minPrice?: string;

  @IsOptional()
  @IsNumberString()
  maxPrice?: string;
}
