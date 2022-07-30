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

    @IsNotEmpty()
    @IsString()
    @Prop()
    mess_id: string;

    @IsString()
    @IsString()
    @Prop()
    person_id: string;

    @IsNotEmpty()
    @IsString()
    @Prop({default(val: any): any {
        return 0;
        }})
    status: meal_status;

}

enum meal_status {
    "Pendin",
    "Active"
}
export const MealEntrySchema = SchemaFactory.createForClass(MealEntry);