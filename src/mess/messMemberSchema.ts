import { Prop,Schema,SchemaFactory} from "@nestjs/mongoose";
import {IsNotEmpty,IsString,IsNumber} from "class-validator";


@Schema({timestamps: true})
export class MessMember{

    @IsNotEmpty()
    @IsString()
    @Prop()
    mess_id: string;

    @IsNotEmpty()
    @IsString()
    @Prop()
    person_id: string;

    @IsNotEmpty()
    @IsString()
    @Prop({default(val: any): any {
            return 0;
        }})
    status: mess_member;


}

enum mess_member {
    "Pendin",
    "Active"
}

export const MessMemberSchema= SchemaFactory.createForClass(MessMember);