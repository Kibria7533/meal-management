import { Module } from '@nestjs/common';
import { MonthlyStatementService } from './monthly_statement.service';
import { MonthlyStatementController } from './monthly_statement.controller';
import {MonthlyStatement,MonthlyStatementSchema} from "./monthly-statementSchema";
import {MongooseModule} from "@nestjs/mongoose";

@Module({
  imports :[MongooseModule.forFeature([{ name: 'MonthlyStatement', schema: MonthlyStatementSchema }])],
  controllers: [MonthlyStatementController],
  providers: [MonthlyStatementService]
})
export class MonthlyStatementModule {}
