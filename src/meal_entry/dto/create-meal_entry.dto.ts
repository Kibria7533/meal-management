 import {IsNotEmpty,IsNumber,IsString} from "class-validator";
 import { ApiProperty } from '@nestjs/swagger';
 import { Type } from "class-transformer";
export class CreateMealEntryDto {

    @IsNumber()
    @ApiProperty()
    @IsNotEmpty()
    @Type(() => Number)
    break_fast: number;

    @IsNumber()
    @ApiProperty()
    @IsNotEmpty()
    @Type(() => Number)
    lunch: number;

    @IsNumber()
    @ApiProperty()
    @IsNotEmpty()
    @Type(() => Number)
    dinner: number;

    @IsNumber()
    @ApiProperty()
    @IsNotEmpty()
    @Type(() => Number)
    readonly mess_id: number;

}
