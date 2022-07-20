import { Prop,Schema,SchemaFactory} from "@nestjs/mongoose";
import {IsNotEmpty,IsString,IsNumber} from "class-validator";

@Schema({timestamps: true})
export class Member{

    @IsNotEmpty()
    @IsNumber()
    @Prop()
    mess_id: number;

    @IsNotEmpty()
    @IsString()
    @Prop()
    name: string;

    @IsNotEmpty()
    @IsNumber()
    @Prop()
    phone_no: number;

    @IsNotEmpty()
    @IsString()
    @Prop()
    address: string;
}

export const MemberSchema = SchemaFactory.createForClass(Member);