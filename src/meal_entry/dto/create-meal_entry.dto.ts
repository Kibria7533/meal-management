 import {IsNotEmpty,IsNumber,IsString} from "class-validator";
 import { ApiProperty } from '@nestjs/swagger';
export class CreateMealEntryDto {
    @IsString()
    @ApiProperty()
    @IsNotEmpty()
    break_fast: string;

    @IsString()
    @ApiProperty()
    @IsNotEmpty()
    lunch: string;

    @IsString()
    @ApiProperty()
    @IsNotEmpty()
    dinner: string;

    @IsString()
    @ApiProperty()
    @IsNotEmpty()
    readonly mess_id: string;

}
