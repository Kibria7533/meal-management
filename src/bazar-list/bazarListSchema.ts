import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose"
import {IsNotEmpty, IsString} from "class-validator";
@Schema()
export class BazarList {
    @IsNotEmpty()
    @IsString()
    @Prop()
    cost: string;

    @IsString()
    @IsNotEmpty()
    @Prop()
    item_name: string;
}
export const BazarListSchema = SchemaFactory.createForClass(BazarList);