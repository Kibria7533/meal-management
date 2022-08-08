import { Controller, Get, Post, Body, Patch, Param, Delete, ValidationPipe, Req, UseGuards } from "@nestjs/common";
import { MessService } from './mess.service';
import { CreateMessDto } from './dto/create-mess.dto';
import { UpdateMessDto } from './dto/update-mess.dto';
import { CreateMealEntryDto } from "../meal_entry/dto/create-meal_entry.dto";
import { JwtAuthGuard } from "../auth/jwt-auth.guard";
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Mess')
@Controller('mess')
export class MessController {
  constructor(private readonly messService: MessService) {}

  @Post()
  @UseGuards(new JwtAuthGuard(0))
  create(@Body(new ValidationPipe) body: CreateMessDto, @Req() req) {
    return this.messService.create(body,req.user.user_id);
  }

  @Post('join-mess')
  @UseGuards(new JwtAuthGuard(0))
  async join(@Body() body, @Req() req){
    return await this.messService.joinMess(body.mess_id,req.user.user_id)
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
