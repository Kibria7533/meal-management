import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BazarListModule } from '../bazar-list/bazar-list.module';
import { MessModule } from '../mess/mess.module';
import { DepositModule } from '../deposit/deposit.module';
import { MemberModule } from '../member/member.module';
import { MonthlyStatementModule } from '../monthly_statement/monthly_statement.module';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from '../auth/auth.module';
import { MealEntryModule } from '../meal_entry/meal_entry.module';
import { RequestModule } from '../request/request.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.DATABASE),
    BazarListModule,
    MessModule,
    DepositModule,
    MealEntryModule,
    MemberModule,
    RequestModule,
    MonthlyStatementModule,
    AuthModule,
    MealEntryModule,
  ],

  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
}
