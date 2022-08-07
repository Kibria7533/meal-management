//export class CreateDepositDto {}
import { IsNotEmpty, IsNumber, IsString, MaxLength } from "class-validator";
import { ApiProperty } from '@nestjs/swagger';

export class CreateDepositDto {
  @IsString()
  @ApiProperty()
  @MaxLength(30)
  @IsNotEmpty()
  name: string;

  @IsNumber()
  @ApiProperty()
  @IsNotEmpty()
  amount: number;

  @IsString()
  @ApiProperty()
  @IsNotEmpty()
  readonly mess_id: string;

}