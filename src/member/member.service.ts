import { BadRequestException, Body, forwardRef, Inject, Injectable, Post } from "@nestjs/common";
import { CreateMemberDto } from "./dto/create-member.dto";
import { UpdateMemberDto } from "./dto/update-member.dto";
import { Member } from "./memberSchema";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import * as bcrypt from "bcrypt";
import { SearchService } from "../search/search.service";
import { MessService } from "../mess/mess.service";
import { MailerService } from "@nestjs-modules/mailer";
import { keycloakAdminClient } from "../keycloak/keycloak";

@Injectable()
export class MemberService {

  constructor(@InjectModel('Member') private memberModel:Model<Member>,
              //@Inject(SearchService)
 // private readonly searchService: SearchService,
              @Inject(MailerService)
  private readonly mailerService: MailerService) {
  }

  @Post()
  async create(@Body() member: CreateMemberDto) {
    const { password, name } = member;
    const existCheck=await this.memberModel.findOne({name:name});
    if(existCheck){
      return {
        success:false,
        status:404,
        msg: 'User already exists',
      }
    }

    try{
      const saltOrRounds = 10;
      member.password=await bcrypt.hash(password, saltOrRounds);
     let user=await new this.memberModel(member).save();
       // await this.searchService.indexMember({name:user.name,email:user.email,phone_no:user.phone_no,address:user.address});
     if(user){
       const keycloakData={
         username: user.name,
         email: user.email,
         firstName: user.name,
         lastName: user.name,
         password: password,
       }
     const ssoUser= await this.keyCloakRegistration(keycloakData);
       console.log(ssoUser,'ssoUser Data',keycloakData);
       if (!ssoUser) {
         throw new BadRequestException('Registration failed');
       }
       const mailObj={
         name:user.name,
         powers:['Rafi','Kibria','Taskin'],
         imageUrl:"https://cdn.pixabay.com/photo/2014/10/19/20/59/hamburger-494706_960_720.jpg",
         toemail:user.email
       }
       const mail=await this.postHTMLEmail(mailObj);
       if(mail){
         return {
           success: true,
           status:201,
           msg: 'User created',
         }
       }

     }
    }catch (error){
      console.log(error,"error");
        return {
          success:false,
          status:404,
          msg: "Phone no is already taken",
        }
      }

  }



  async keyCloakRegistration(keyCloakUserData) {
    const client = await keycloakAdminClient();

    const keycloakUserNameCount = await client.users.count({
      username: keyCloakUserData.username,
    });
    const keycloakUserEmailCount = await client.users.count({
      email: keyCloakUserData.email,
    });

    if (keycloakUserNameCount > 0 || keycloakUserEmailCount > 0) {
      return false;
    }

    return await client.users.create({
      username: keyCloakUserData.username,
      email: keyCloakUserData.email,
      firstName: keyCloakUserData.first_name,
      lastName: keyCloakUserData.last_name,
      enabled: true,
      credentials: [
        {
          type: 'password',
          value: keyCloakUserData.password,
          temporary: false,
        },
      ],
    });
  }

 async findMember(user_id:string){
    return this.memberModel.findOne({ _id: user_id },{password:0}).populate('image');
 }

  async findOne(user_id: string,mess_id:string) {
    try {
    let member=await this.memberModel.findOne({ _id: user_id});
    if('ll'==mess_id){
      return {
        success: true,
        status:201,
        mess_id:member,
        msg: 'Mess Exist',
      }
    }else{
      return {
        success: false,
        status:400,
        msg: 'No Mess Exist with this id',
      }
    }

    }catch (e){
      return {
        success: false,
        status:400,
        msg: 'No Mess Exist with this id',
      }
    }
  }


  async findOneAndUpdate(id: string,mess_id:any) : Promise<any>{
     return this.memberModel.findOneAndUpdate({ _id: id }, { mess_id: mess_id });
  }

  update(id: number, updateMemberDto: UpdateMemberDto) {
    return `This action updates a #${id} member`;
  }

  async updateImage(id: string, image:any) {
    const images=await  this.memberModel.findOneAndUpdate({ _id: id }, { image: image });
    console.log(images);
  }

  async remove(id: number) {
    // await this.searchService.remove(id);
    return this.memberModel.deleteOne({id})
  }


  async find(name: string) {
    return  this.memberModel.findOne({name: name});
  }

  getMemberStatement(id: string) {
    return this.memberModel.aggregate([{
      $match: {
        $and: [{ mess_id: id }]
      }
    },
      { $group: { _id: "$mess_id", totalActiveMember: { $sum: "$_id" } } },
      { $project: { _id: 0 } }
    ]);
  }

   async findOneMember(phone_no:string) {
     return this.memberModel.findOne({ phone_no: phone_no });
  }

  async getAllMemberOfaMess(userIds: Array<string>) {
    return this.memberModel.find({ "_id": { "$in": userIds } })
  }

  async getAllMemberOfaMessCount(userIds: Array<string>) {
    return this.memberModel.find({ "_id": { "$in": userIds } }).count()
  }

  // @Get('plain-text-email')
  // async plainTextEmail(@Query('toemail') toEmail) {
  //   const response = await this.mailService.sendMail({
  //     to: toEmail,
  //     from: 'gkibriaiu@gmail.com',
  //     subject: 'Plain Text Email ✔',
  //     text: 'Welcome NestJS Email Sending Tutorial',
  //   });
  //   return response;
  // }


  async postHTMLEmail(superHero: any) {
    const response = await this.mailerService.sendMail({
      to: 'tenminuteversity@gmail.com',
      from: 'gkibriaiu@gmail.com',
      subject: 'HTML Dynamic Template',
      template: 'superhero',
      context: {
        superHero: superHero,
      },
    });
    return 'success';
  }

  // @Get('file-attachment')
  // async fileAttachement(@Query('toemail') toemail) {
  //   const response = await this.mailService.sendMail({
  //     to: toemail,
  //     from: 'nani.bommidi93@gmail.com',
  //     subject: 'File Attachment',
  //     html: '<h1>File Attachment</h1>',
  //     attachments: [
  //       {
  //         path: join(__dirname, 'mails', 'bike-1.webp'),
  //         filename: '1.webp',
  //         contentDisposition: 'attachment',
  //       },
  //     ],
  //   });
  //   return 'success';
  // }
}
