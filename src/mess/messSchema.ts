import { Prop,Schema,SchemaFactory} from "@nestjs/mongoose";
 import {IsNotEmpty,IsString,IsNumber} from "class-validator";

@Schema({timestamps: true})
export class Mess{

    @IsNotEmpty()
    @IsString()
    @Prop()
    name: string;

    @IsNotEmpty()
    @IsString()
    @Prop()
    email: string;

    @IsNotEmpty()ra
    @IsString()
    @Prop()
    phone_no: number;

    @IsNotEmpty()
    @IsString()
    @Prop()
    password: string;

    @IsNotEmpty()
    @IsString()
    @Prop()
    confirm_password: string;

}

export const MessSchema = SchemaFactory.createForClass(Mess);