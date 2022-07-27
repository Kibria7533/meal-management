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
import {MealEntryModule} from "../meal_entry/meal_entry.module";
import {MealEntry} from "../meal_entry/mealEntrySchema";
// 'mongodb+srv://messdb1:kibria7533@cluster0.ak8uw.mongodb.net/?retryWrites=true&w=majority'
@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost/mess'),
    BazarListModule,
    MessModule,
    DepositModule,
    MemberModule,
    MonthlyStatementModule,
    AuthModule,
    MealEntryModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
