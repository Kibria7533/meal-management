import { Module } from '@nestjs/common';
import { BazarListService } from './bazar-list.service';
import { BazarListController } from './bazar-list.controller';

@Module({
  controllers: [BazarListController],
  providers: [BazarListService]
})
export class BazarListModule {}
