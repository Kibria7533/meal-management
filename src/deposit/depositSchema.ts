import { Prop,Schema,SchemaFactory} from "@nestjs/mongoose";
import {IsNotEmpty,IsString,IsNumber} from "class-validator";
@Schema({timestamps: true})
export class Deposit{

    @IsNotEmpty()
    @IsString()
    @Prop()
    name: string;

    @IsNotEmpty()
    @IsNumber()
    @Prop()
    amount: number;

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
    "Pendin",
    "Active"
}
export const DepositSchema = SchemaFactory.createForClass(Deposit);