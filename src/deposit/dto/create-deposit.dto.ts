//export class CreateDepositDto {}
import { IsNotEmpty, IsNumber, IsString, MaxLength } from "class-validator";

export class CreateDepositDto {
  @IsString()
  @MaxLength(30)
  @IsNotEmpty()
  name: string;

  @IsNumber()
  @IsNotEmpty()
  amount: number;

  @IsString()
  @IsNotEmpty()
  readonly mess_id: string;


}