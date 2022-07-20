import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose"
import {IsNotEmpty, IsString} from "class-validator";
@Schema()
export class MealEntry {
    @IsNotEmpty()
    @IsString()
    @Prop()
    break_fast: string;

    @IsString()
    @IsNotEmpty()
    @Prop()
    launch: string;

    @IsString()
    @IsNotEmpty()
    @Prop()
    dinner: string;
}
export const MealEntrySchema = SchemaFactory.createForClass(MealEntry);