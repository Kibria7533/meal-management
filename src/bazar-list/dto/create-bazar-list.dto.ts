import { IsNotEmpty, IsNumber, IsString, MaxLength } from "class-validator";
export class CreateBazarListDto {
    @IsString()
    @MaxLength(30)
    @IsNotEmpty()
    readonly date: string;

    @IsString()
    @MaxLength(30)
    @IsNotEmpty()
    readonly cost: string;

    @IsString()
    @IsNotEmpty()
    readonly item_name: string;

    @IsString()
    @IsNotEmpty()
    readonly name_of_person: string;
}