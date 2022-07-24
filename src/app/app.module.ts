import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BazarListModule } from '../bazar-list/bazar-list.module';
import {MessModule} from  '../mess/mess.module';
import {DepositModule} from '../deposit/deposit.module'
import {MemberModule} from "../member/member.module";
import {MonthlyStatementModule} from "../monthly_statement/monthly_statement.module";
import { MongooseModule } from '@nestjs/mongoose';
import {UsersModule} from "../users/users.module";
import {AuthModule} from "../auth/auth.module";
// 'mongodb+srv://messdb1:kibria7533@cluster0.ak8uw.mongodb.net/?retryWrites=true&w=majority'
@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://messdb1:kibria7533@cluster0.ak8uw.mongodb.net/?retryWrites=true&w=majority'),
    BazarListModule,
    MessModule,
    DepositModule,
    MemberModule,
    MonthlyStatementModule,
    AuthModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
