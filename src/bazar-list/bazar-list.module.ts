import { Module } from '@nestjs/common';
import { BazarListService } from './bazar-list.service';
import { BazarListController } from './bazar-list.controller';
import {BazarList,BazarListSchema} from "./bazarListSchema";
import {MongooseModule} from "@nestjs/mongoose";

@Module({
  imports :[MongooseModule.forFeature([{ name: 'BazarList.Name', schema: BazarListSchema }])],
  controllers: [BazarListController],
  providers: [BazarListService]
})
export class BazarListModule {}
