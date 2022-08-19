import { Inject, Injectable } from "@nestjs/common";
import { CreateUploadDto } from "./dto/create-upload.dto";
import { UpdateUploadDto } from "./dto/update-upload.dto";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { UserImage } from "./userImageSchema";
import { MemberService } from "../member/member.service";

@Injectable()
export class UploadService {

  constructor( @InjectModel('UserImage') private userImageModel:Model<UserImage>, @Inject(MemberService)
  private readonly memberService: MemberService) {
  }

  create(createUploadDto: CreateUploadDto) {
    return 'This action adds a new upload';
  }

  findAll() {
    return `This action returns all upload`;
  }

  findOne(id: number) {
    return `This action returns a #${id} upload`;
  }

  update(id: number, updateUploadDto: UpdateUploadDto) {
    return `This action updates a #${id} upload`;
  }

  remove(id: number) {
    return `This action removes a #${id} upload`;
  }

  async imageUpload(user_id:string, filename: string) {
    const newUserImage=await new this.userImageModel({person_id:user_id,image_name:filename}).save();
    this.memberService.updateImage(user_id,newUserImage._id);
    return newUserImage;
  }
}
