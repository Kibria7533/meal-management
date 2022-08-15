import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from "@nestjs/common";
import { SearchService } from './search.service';
import {  SearchElasticDto } from "./dto/create-search.dto";
import { UpdateSearchDto } from './dto/update-search.dto';
import { ApiTags } from "@nestjs/swagger";


@ApiTags('Search')
@Controller('search')
export class SearchController {
  constructor(private readonly searchService: SearchService) {}

  @Get('member/elastic-search')
  public async searchElastic(@Query() queryParams: SearchElasticDto) {
    return await this.searchService.searchElastic(queryParams);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.searchService.remove(+id);
  }
}
