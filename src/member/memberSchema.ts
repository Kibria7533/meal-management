import { Prop,Schema,SchemaFactory} from "@nestjs/mongoose";
import {IsNotEmpty,IsString,IsNumber} from "class-validator";

@Schema({timestamps: true})
export class Member{

    @IsNotEmpty()
    @IsString()
    @Prop()
    name: string;

    @IsNotEmpty()
    @IsString()
    @Prop()
    email: string;

    @IsNotEmpty()
    @IsNumber()
    @Prop()
    phone_no: string;

    @IsNotEmpty()
    @IsString()
    @Prop()
    address: string;

    @IsNotEmpty()
    @IsString()
    @Prop()
    password:string

    @IsNotEmpty()
    @IsNumber()
    @Prop({default: 0})
    role:Role

    @IsNotEmpty()
    @IsString()
    @Prop({default(val: any): any {
            return 0;
        }})
    status: status;
}
enum status {
    "Pendin",
    "Active"
}
enum Role {
    "User",
    "Admin"
}
export const MemberSchema = SchemaFactory.createForClass(Member);