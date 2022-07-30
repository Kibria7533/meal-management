import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose"
import {IsNotEmpty, IsString} from "class-validator";

@Schema({ timestamps: true })
export class BazarList {

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
    person_id: string;

    @IsNotEmpty()
    @IsString()
    @Prop()
    mess_id: string;

    @IsNotEmpty()
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