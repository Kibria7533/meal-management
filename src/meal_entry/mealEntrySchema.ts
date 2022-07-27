import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose"
import {IsNotEmpty, IsNumber, IsString} from "class-validator";
@Schema({ timestamps: true })
export class MealEntry {
    @IsNotEmpty()
    @IsNumber()
    @Prop()
    break_fast: number;

    @IsNotEmpty()
    @IsNumber()
    @Prop()
    lunch: number;

    @IsNotEmpty()
    @IsNumber()
    @Prop()
    dinner: number;

    @IsNotEmpty()
    @IsString()
    @Prop()
    meal_of: string;
}
export const MealEntrySchema = SchemaFactory.createForClass(MealEntry);