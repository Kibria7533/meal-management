import { ApiProperty } from "@nestjs/swagger";
import { IsOptional, IsString, MinLength } from "class-validator";

export class SearchElasticDto {
  @ApiProperty({description: 'search_term', required: false})
  @IsOptional()
  @IsString()
  @MinLength(1)
  public search_term!: string;
}