import { Module } from '@nestjs/common';
import { BazarListService } from './bazar-list.service';
import { BazarListController } from './bazar-list.controller';
import {BazarList,BazarListSchema} from "./bazarListSchema";
import {MongooseModule} from "@nestjs/mongoose";

@Module({
  imports :[MongooseModule.forFeature([{ name: 'BazarList', schema: BazarListSchema }])],
  controllers: [BazarListController],
  providers: [BazarListService],
  exports :[BazarListService]
})
export class BazarListModule {}
