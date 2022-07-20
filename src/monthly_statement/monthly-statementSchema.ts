import { Prop,Schema,SchemaFactory} from "@nestjs/mongoose";
import {IsNotEmpty,IsString,IsNumber} from "class-validator";

@Schema({timestamps: true})
export class MonthlyStatement{

    @IsNotEmpty()
    @IsNumber()
    @Prop()
    mess_id: number;

    @IsNotEmpty()
    @IsNumber()
    @Prop()
    total_deposit: number;

    @IsNotEmpty()
    @IsNumber()
    @Prop()
    cost: number;

    @IsNotEmpty()
    @IsNumber()
    @Prop()
    balance: number;

    @IsNotEmpty()
    @IsNumber()
    @Prop()
    total_meal: number;

    @IsNotEmpty()
    @IsNumber()
    @Prop()
    meal_rate: number;
}

export const MonthlyStatementSchema = SchemaFactory.createForClass(MonthlyStatement);