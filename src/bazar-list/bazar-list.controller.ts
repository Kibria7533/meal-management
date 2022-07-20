import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BazarListService } from './bazar-list.service';
import { CreateBazarListDto } from './dto/create-bazar-list.dto';
import { UpdateBazarListDto } from './dto/update-bazar-list.dto';

@Controller('bazar-list')
export class BazarListController {
  constructor(private readonly bazarListService: BazarListService) {}

  @Post()
  create(@Body() createBazarListDto: CreateBazarListDto) {
    return this.bazarListService.create(createBazarListDto);
  }

  @Get()
  findAll() {
    return this.bazarListService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.bazarListService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBazarListDto: UpdateBazarListDto) {
    return this.bazarListService.update(+id, updateBazarListDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.bazarListService.remove(+id);
  }
}
