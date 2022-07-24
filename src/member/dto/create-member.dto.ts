import { IsNotEmpty, IsNumber, IsString, MaxLength } from "class-validator";
export class CreateMemberDto {
    @IsString()
    @MaxLength(30)
    @IsNotEmpty()
    readonly name: string;

    @IsString()
    @IsNotEmpty()
    readonly phone_no: string;

    @IsString()
    @IsNotEmpty()
    readonly address: string;

    @IsString()
    @IsNotEmpty()
    password: string;
}