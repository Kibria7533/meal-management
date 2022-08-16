import { Prop,Schema,SchemaFactory} from "@nestjs/mongoose";
import {IsNotEmpty,IsString,IsNumber} from "class-validator";
@Schema({timestamps: true})
export class Deposit{


    @Prop()
    name: string;


    @Prop()
    amount: number;

    @Prop()
    person_id: string;


    @Prop()
    mess_id: string;


    @Prop({default(val: any): any {
            return 0;
        }})
    status: meal_status;
}

enum meal_status {
    "Pendin",
    "Active"
}
export const DepositSchema = SchemaFactory.createForClass(Deposit);