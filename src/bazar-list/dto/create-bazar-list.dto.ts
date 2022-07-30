import { IsNotEmpty, IsNumber, IsString, MaxLength } from "class-validator";
export class CreateBazarListDto {

    @IsString()
    @MaxLength(30)
    @IsNotEmpty()
    readonly cost: string;

    @IsString()
    @IsNotEmpty()
    readonly mess_id: string;

    @IsString()
    @IsNotEmpty()
    readonly item_name: string;

    @IsString()
    @IsNotEmpty()
     person_id: string;
}