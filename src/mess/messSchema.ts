import { Prop,Schema,SchemaFactory} from "@nestjs/mongoose";
 import {IsNotEmpty,IsString,IsNumber} from "class-validator";

@Schema({timestamps: true})
export class Mess{

    @IsNotEmpty()
    @IsString()
    @Prop()
    title: string;

    @IsNotEmpty()
    @IsNumber()
    @Prop()
    unique_id: number;

}

export const MessSchema = SchemaFactory.createForClass(Mess);