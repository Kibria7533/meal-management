import { Prop,Schema,SchemaFactory} from "@nestjs/mongoose";
import {IsNotEmpty,IsString,IsNumber} from "class-validator";
@Schema({timestamps: true})
export class Deposit{

    @IsNotEmpty()
    @IsNumber()
    @Prop()
    amount: number;

    @IsNotEmpty()
    @IsNumber()
    @Prop()
    member_id: number;

    @IsNotEmpty()
    @IsString()
    @Prop()
    details: string;

}

export const DepositSchema = SchemaFactory.createForClass(Deposit);