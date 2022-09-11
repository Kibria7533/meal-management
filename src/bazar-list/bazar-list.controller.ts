import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Request,
  ValidationPipe,
  Req
} from "@nestjs/common";
import { BazarListService } from './bazar-list.service';
import { CreateBazarListDto } from './dto/create-bazar-list.dto';
import { UpdateBazarListDto } from './dto/update-bazar-list.dto';
import { JwtAuthGuard } from "../auth/jwt-auth.guard";
import { CreateDepositDto } from "../deposit/dto/create-deposit.dto";
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Bazar List')
@Controller('bazar-list')
export class BazarListController {
  constructor(private readonly bazarListService: BazarListService) {}

  @Post()
  @UseGuards(new JwtAuthGuard(0))
  create(@Body(new ValidationPipe) body: CreateBazarListDto, @Req() req) {
    let bazar=req.body;
    bazar.person_id=req.user.user_id;
    return this.bazarListService.create(bazar);
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
