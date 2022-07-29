import { Prop,Schema,SchemaFactory} from "@nestjs/mongoose";
 import {IsNotEmpty,IsString,IsNumber} from "class-validator";

@Schema({timestamps: true})
export class Mess{

    @IsNotEmpty()
    @IsString()
    @Prop()
    mess_name: string;

    @IsNotEmpty()
    @IsString()
    @Prop()
    mess_id: string;


}

export const MessSchema = SchemaFactory.createForClass(Mess);