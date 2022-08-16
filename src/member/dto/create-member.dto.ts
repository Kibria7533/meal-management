import { IsEmpty, IsNotEmpty, IsNumber, IsPhoneNumber, IsString, MaxLength, MinLength } from "class-validator";
import { ApiProperty } from '@nestjs/swagger';
export class CreateMemberDto {
    @IsString()
    @MaxLength(30)
    @MinLength(3)
    @ApiProperty()
    @IsNotEmpty()
    readonly name: string;

    @IsString()
    @ApiProperty()
    @IsNotEmpty()
    readonly email: string;

    @IsString()
    @ApiProperty()
    @IsNotEmpty()
    @IsPhoneNumber("BD")
    readonly phone_no: string;

    @IsString()
    @ApiProperty()
    @IsNotEmpty()
    readonly address: string;

    @IsNotEmpty()
    @ApiProperty()
    password: string;
}