import {
  IsString,
  IsOptional,
  IsNumber,
  Min,
  IsInt,
  MinLength,
  MaxLength,
} from 'class-validator';

export class CreateGoodDto {
  @IsString()
  @MinLength(1)
  @MaxLength(200)
  name!: string;

  @IsOptional()
  @IsString()
  @MaxLength(1000)
  description?: string;

  @IsInt()
  @Min(0)
  quantity!: number;

  @IsNumber({ maxDecimalPlaces: 2 })
  @Min(0)
  price!: number;
}
