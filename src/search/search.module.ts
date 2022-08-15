import { Module, OnModuleInit } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ElasticsearchModule } from '@nestjs/elasticsearch';
import { SearchService } from './search.service';
import * as Joi from 'joi';
import { SearchController } from "./search.controller";

@Module({
  imports: [
    ConfigModule,
    ElasticsearchModule.registerAsync({
      imports: [ConfigModule.forRoot({
        validationSchema: Joi.object({
          DATABASE_URL: Joi.string().required(),
          PORT: Joi.number(),
          NODE_ENV: Joi.string().required(),
          ELASTICSEARCH_NODE: Joi.string().required(),
          ELASTICSEARCH_INDEX: Joi.string().required(),
        }),
      })],
      useFactory: async (configService: ConfigService) => ({
        node: configService.get('ELASTICSEARCH_NODE'),
        maxRetries: 10,
        requestTimeout: 60000,
      }),
      inject: [ConfigService],
    }),
  ],
  controllers:[SearchController],
  providers: [SearchService],
  exports: [ElasticsearchModule, SearchService],
})
export class SearchModule implements OnModuleInit  {
  constructor(private readonly searchService: SearchService){}
  public async onModuleInit() {
    await this.searchService.createIndex();
  }
}