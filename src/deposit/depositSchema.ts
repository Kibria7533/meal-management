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

    @IsNumber()
    @Prop({default: 0})
    status: number;
}

export const DepositSchema = SchemaFactory.createForClass(Deposit);