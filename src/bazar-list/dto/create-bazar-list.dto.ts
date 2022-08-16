import { IsNotEmpty, IsNumber, IsString, MaxLength } from "class-validator";
import { ApiProperty } from '@nestjs/swagger';
import { Type } from "class-transformer";
export class CreateBazarListDto {

    @IsNumber()
    @ApiProperty()
    @IsNotEmpty()
    @Type(() => Number)
    readonly cost: number;

    @IsNumber()
    @ApiProperty()
    @IsNotEmpty()
    @Type(() => Number)
    readonly mess_id: number;

    @IsString()
    @ApiProperty()
    @IsNotEmpty()
    readonly item_name: string;

}