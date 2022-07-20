import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MessService } from './mess.service';
import { CreateMessDto } from './dto/create-mess.dto';
import { UpdateMessDto } from './dto/update-mess.dto';

@Controller('mess')
export class MessController {
  constructor(private readonly messService: MessService) {}

  @Post()
  create(@Body() createMessDto: CreateMessDto) {
    return this.messService.create(createMessDto);
  }

  @Get()
  findAll() {
    return this.messService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.messService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMessDto: UpdateMessDto) {
    return this.messService.update(+id, updateMessDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.messService.remove(+id);
  }
}
