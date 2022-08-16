import { Prop,Schema,SchemaFactory} from "@nestjs/mongoose";

@Schema({timestamps: true})
export class Member{

    @Prop({
        required: true,
        unique: true,
        type: String,
    })
    name: string;

    @Prop()
    email: string;

    @Prop({
        required: true,
        unique: true,
        type: String,
    })
    phone_no: string;

    @Prop()
    address: string;

    @Prop()
    password:string

    @Prop({default: 0})
    role:Role

}

enum Role {
    "User",
    "Admin"
}
export const MemberSchema = SchemaFactory.createForClass(Member);