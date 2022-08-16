import { Prop,Schema,SchemaFactory} from "@nestjs/mongoose";
import {IsNotEmpty,IsString,IsNumber} from "class-validator";


@Schema({timestamps: true})
export class MessMember{


    @Prop()
    mess_id: string;


    @Prop()
    person_id: string;


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