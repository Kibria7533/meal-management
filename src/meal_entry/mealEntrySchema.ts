import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose"
import {IsNotEmpty, IsNumber, IsString} from "class-validator";
@Schema({ timestamps: true })
export class MealEntry {

    @Prop()
    break_fast: string;

    @Prop()
    lunch: string;


    @Prop()
    dinner: string;


    @Prop()
    meal_of: string;


    @Prop()
    mess_id: string;


    @Prop()
    person_id: string;


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