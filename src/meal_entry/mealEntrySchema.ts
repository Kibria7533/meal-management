import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose"
import {IsNotEmpty, IsString} from "class-validator";
@Schema()
export class MealEntry {
    @IsNotEmpty()
    @IsString()
    @Prop()
    cost: string;

    @IsString()
    @IsNotEmpty()
    @Prop()
    item_name: string;
}
export const MealEntrySchema = SchemaFactory.createForClass(MealEntry);