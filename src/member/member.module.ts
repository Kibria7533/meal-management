import { Module } from "@nestjs/common";
import { MemberService } from "./member.service";
import { MemberController } from "./member.controller";
import { Member, MemberSchema } from "./memberSchema";
import { MongooseModule } from "@nestjs/mongoose";
import { SearchModule } from "../search/search.module";
import { MailerModule } from "@nestjs-modules/mailer";
import { join } from "path";
import { HandlebarsAdapter } from "@nestjs-modules/mailer/dist/adapters/handlebars.adapter";


@Module({
  imports :[ MailerModule.forRoot({
    transport: {
      host: 'smtp.sendgrid.net',
      auth: {
        user: 'apikey',
        pass: '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',
      },
    },
    template: {
      dir: join(__dirname, 'templates'),
      adapter: new HandlebarsAdapter(),
      options: {
        strict: true,
      },
    },
  }),MongooseModule.forFeatureAsync([
    {
      name: Member.name,
      useFactory: () => {
        const schema = MemberSchema;
        schema.plugin(require('mongoose-unique-validator'), { message: 'is already taken' });
        return schema;
      },
    },
  ])],
  controllers: [MemberController],
  providers: [MemberService],
  exports: [MemberService]
})
export class MemberModule {}
