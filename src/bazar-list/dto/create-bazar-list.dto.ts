import { IsNotEmpty, IsNumber, IsString, MaxLength } from "class-validator";
import { ApiProperty } from '@nestjs/swagger';
export class CreateBazarListDto {

    @IsString()
    @ApiProperty()

    @MaxLength(30)
    @ApiProperty()
    @IsNotEmpty()
    readonly cost: string;

    @IsString()
    @ApiProperty()
    @IsNotEmpty()
    readonly mess_id: string;

    @IsString()
    @ApiProperty()
    @IsNotEmpty()
    readonly item_name: string;

}