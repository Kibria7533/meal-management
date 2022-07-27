import {IsString,IsNumber,IsNotEmpty} from "class-validator";

export class CreateMessDto {
    @IsString()
    @IsNotEmpty()
    name:string;

    @IsString()
    @IsNotEmpty()
    email:string;

    @IsNumber()
    @IsNotEmpty()
    phone_no: string;

    @IsString()
    @IsNotEmpty()
    password: string;

    @IsString()
    @IsNotEmpty()
    confirm_password: string;
}
