import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose"
import {IsNotEmpty} from "class-validator";
@Schema()
export class BazarList {
    @IsNotEmpty()
    @Prop()
    cost: string;

    @IsNotEmpty()
    @Prop()
    item_name: string;
}
export const BazarListSchema = SchemaFactory.createForClass(BazarList);