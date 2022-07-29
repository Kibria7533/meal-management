import { IsEmpty, IsNotEmpty, IsNumber, IsString, MaxLength, MinLength } from "class-validator";
export class CreateMemberDto {
    @IsString()
    @MaxLength(30)
    @MinLength(3)
    @IsNotEmpty()
    readonly name: string;

    @IsString()
    @IsNotEmpty()
    readonly email: string;

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