import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose"
import {IsNotEmpty, IsString} from "class-validator";

@Schema({ timestamps: true })
export class BazarList {
    @IsNotEmpty()
    @IsString()
    @Prop()
    date: string;

    @IsNotEmpty()
    @IsString()
    @Prop()
    cost: string;

    @IsString()
    @IsNotEmpty()
    @Prop()
    item_name: string;

    @IsString()
    @IsString()
    @Prop()
    name_of_person: string;

}
export const BazarListSchema = SchemaFactory.createForClass(BazarList);