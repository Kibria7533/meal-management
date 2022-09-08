import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  Patch,
  Post,
  Req,
  Res,
  UseGuards,
  ValidationPipe
} from "@nestjs/common";
import { BazarListService } from "./bazar-list.service";
import { CreateBazarListDto } from "./dto/create-bazar-list.dto";
import { UpdateBazarListDto } from "./dto/update-bazar-list.dto";
import { JwtAuthGuard } from "../auth/jwt-auth.guard";
import { ApiTags } from "@nestjs/swagger";

@ApiTags('Bazar List')
@Controller('private/bazar-list')
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
  async findAll(@Res() res,) {

    const bazarLists = await this.bazarListService.findAll();
    return res.status(HttpStatus.OK).json(bazarLists);
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
