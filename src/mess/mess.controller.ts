import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ValidationPipe,
  Req,
  UseGuards,
  Res,
  HttpStatus
} from "@nestjs/common";
import { MessService } from "./mess.service";
import { AddMemberToMess, CreateMessDto } from "./dto/create-mess.dto";
import { UpdateMessDto } from "./dto/update-mess.dto";
import { CreateMealEntryDto } from "../meal_entry/dto/create-meal_entry.dto";
import { JwtAuthGuard } from "../auth/jwt-auth.guard";
import { ApiTags } from "@nestjs/swagger";

@ApiTags("Mess")
@Controller("mess")
export class MessController {
  constructor(private readonly messService: MessService) {
  }

  @Post()
  @UseGuards(new JwtAuthGuard(0))
  create(@Body(new ValidationPipe) body: CreateMessDto, @Req() req) {
    return this.messService.create(body, req.user.user_id);
  }

  @Post("join-mess")
  @UseGuards(new JwtAuthGuard(0))
  async join(@Body() body, @Req() req) {
    return await this.messService.joinMess(body.mess_id, req.user.user_id);
  }

  @Post("add-member-to-mess")
  @UseGuards(new JwtAuthGuard(0))
  public async AddMemberToMess(@Res() res,@Body(new ValidationPipe) addMemberToMess: AddMemberToMess) {
    try {
      const messMember = await  this.messService.AddMemberToMess(addMemberToMess);
      return res.status(HttpStatus.OK).json({
        message: 'Member has been Added successfully',
        messMember,
      });
    } catch (err) {
      console.log(err,'errrr');
      return res.status(HttpStatus.BAD_REQUEST).json({
        message: 'Error: Member not added!',
        status: 400,
      });
    }

  }

  @Get()
  findAll() {
    return this.messService.findAll();
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.messService.findOne(+id);
  }

  @Patch(":id")
  update(@Param("id") id: string, @Body() updateMessDto: UpdateMessDto) {
    return this.messService.update(+id, updateMessDto);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.messService.remove(+id);
  }
}
