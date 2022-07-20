import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BazarListModule } from '../bazar-list/bazar-list.module';
import {MessModule} from  '../mess/mess.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://messdb1:kibria7533@cluster0.ak8uw.mongodb.net/?retryWrites=true&w=majority'),BazarListModule,MessModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
