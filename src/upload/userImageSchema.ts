import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";


@Schema({timestamps: true})
export class UserImage {

  @Prop()
  image_name: string;

  @Prop()
  member_id: string;

}


export const UserImageSchema= SchemaFactory.createForClass(UserImage);