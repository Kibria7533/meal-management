 import {IsNotEmpty,IsNumber,IsString} from "class-validator";
export class CreateMealEntryDto {
    @IsNumber()
    @IsNotEmpty()
    break_fast: number;

    @IsNumber()
    @IsNotEmpty()
    lunch: number;

    @IsNumber()
    @IsNotEmpty()
    dinner: number;

    @IsString()
    @IsNotEmpty()
    readonly mess_id: string;

}
