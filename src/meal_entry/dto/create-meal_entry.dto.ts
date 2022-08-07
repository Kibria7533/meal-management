 import {IsNotEmpty,IsNumber,IsString} from "class-validator";
 import { ApiProperty } from '@nestjs/swagger';
export class CreateMealEntryDto {
    @IsNumber()
    @ApiProperty()
    @IsNotEmpty()
    break_fast: number;

    @IsNumber()
    @ApiProperty()
    @IsNotEmpty()
    lunch: number;

    @IsNumber()
    @ApiProperty()
    @IsNotEmpty()
    dinner: number;

    @IsString()
    @ApiProperty()
    @IsNotEmpty()
    readonly mess_id: string;

}
