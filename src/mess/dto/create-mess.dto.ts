import {IsString,IsNotEmpty} from "class-validator";
import { ApiProperty } from '@nestjs/swagger';

export class CreateMessDto {
    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    mess_name:string;

    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    mess_id:string;
}


export class AddMemberToMess {
    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    phone_no:string;

    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    mess_id:string;
}
