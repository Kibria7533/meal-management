import {IsString,IsNotEmpty} from "class-validator";

export class CreateMessDto {
    @IsString()
    @IsNotEmpty()
    mess_name:string;

    @IsString()
    @IsNotEmpty()
    mess_id:string;
}
