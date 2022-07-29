import { Module } from '@nestjs/common';
import { DepositService } from './deposit.service';
import { DepositController } from './deposit.controller';
import {Deposit,DepositSchema} from './depositSchema';
import {MongooseModule} from "@nestjs/mongoose";

@Module({
  imports :[MongooseModule.forFeature([{ name: 'Deposit', schema: DepositSchema }])],
  controllers: [DepositController],
  providers: [DepositService],
  exports : [DepositService]
})
export class DepositModule {}
