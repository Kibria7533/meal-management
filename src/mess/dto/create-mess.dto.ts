import { IsString, IsNotEmpty, IsNumber, IsPhoneNumber } from "class-validator";
import { ApiProperty } from '@nestjs/swagger';
import { Type } from "class-transformer";

export class CreateMessDto {
    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    mess_name:string;

    @IsNumber()
    @ApiProperty()
    @IsNotEmpty()
    @Type(() => Number)
    mess_id:number;
}


export class AddMemberToMess {
    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    @IsPhoneNumber("BD")
    phone_no:string;

    @IsNumber()
    @ApiProperty()
    @IsNotEmpty()
    @Type(() => Number)
    mess_id:string;
}
