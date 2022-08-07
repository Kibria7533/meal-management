//export class CreateDepositDto {}
import { IsNotEmpty, IsNumber, IsString, MaxLength } from "class-validator";
import { ApiProperty } from '@nestjs/swagger';

export class CreateDepositDto {
  @IsString()
  @ApiProperty()
  @MaxLength(30)
  @IsNotEmpty()
  name: string;

  @IsString()
  @ApiProperty()
  @IsNotEmpty()
  amount: string;

  @IsString()
  @ApiProperty()
  @IsNotEmpty()
  readonly mess_id: string;

}