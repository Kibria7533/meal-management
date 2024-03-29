import {Controller, Get, Post, Body, Patch, Param, Delete, Res, ValidationPipe, Req, UseGuards} from "@nestjs/common";
import { RequestService } from './request.service';
import { CreateRequestDto } from './dto/create-request.dto';
import { UpdateRequestDto } from './dto/update-request.dto';
import {DepositService} from "../deposit/deposit.service";
import {BazarListService} from "../bazar-list/bazar-list.service";
import {MealEntryService} from "../meal_entry/meal_entry.service";
import {MemberService} from "../member/member.service";
import { ApiTags } from '@nestjs/swagger';
import {CreateBazarListDto} from "../bazar-list/dto/create-bazar-list.dto";
import {JwtAuthGuard} from "../auth/jwt-auth.guard";

@ApiTags('Request')
@Controller('request')
export class RequestController {
  constructor(private readonly requestService: RequestService){}
  @Post()
  create(@Body() createRequestDto: CreateRequestDto) {
    return this.requestService.create(createRequestDto);
  }

  @Get()
  findAll() {

    return this.requestService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.requestService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRequestDto: UpdateRequestDto) {
    return this.requestService.update(+id, updateRequestDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.requestService.remove(+id);
  }

  @Get("all-request/:id")
  getRequestBazarList(@Param("id") id: string,@Res() res){
   return this.requestService.getAllRequest(id,res)
  }

  @Post('/accept')
  @UseGuards(new JwtAuthGuard(0))
  acceptRequest(@Body() body: any, @Req() req){
    return this.requestService.acceptRequest(body)
  }
}
