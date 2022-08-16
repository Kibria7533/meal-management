//export class CreateDepositDto {}
import { IsNotEmpty, IsNumber, IsString, MaxLength } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";

export class CreateDepositDto {
  @IsString()
  @ApiProperty()
  @MaxLength(30)
  @IsNotEmpty()
  name: string;

  @IsNumber()
  @ApiProperty()
  @IsNotEmpty()
  @Type(() => Number)
  amount: number;

  @IsString()
  @ApiProperty()
  @IsNotEmpty()
  readonly mess_id: string;

}