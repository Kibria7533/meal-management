import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { IsString } from "class-validator";

@Schema({ timestamps: true })
export class BazarList {


    @Prop()
    cost: string;


    @Prop()
    item_name: string;


    @Prop()
    person_id: string;


    @Prop()
    mess_id: string;


    @IsString()
    @Prop({default(val: any): any {
            return 0;
        }})
    status: meal_status;

}
enum meal_status {
    "Pending",
    "Active"
}
export const BazarListSchema = SchemaFactory.createForClass(BazarList);