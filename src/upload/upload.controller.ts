import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseInterceptors,
  UploadedFile,
  Req,
  UseGuards
} from "@nestjs/common";
import { UploadService } from './upload.service';
import { CreateUploadDto } from './dto/create-upload.dto';
import { UpdateUploadDto } from './dto/update-upload.dto';
import { FileInterceptor } from "@nestjs/platform-express";
import { multerOptions } from "./fileUploadHelper";
import { JwtAuthGuard } from "../auth/jwt-auth.guard";

@Controller('upload')
export class UploadController {
  constructor(private readonly uploadService: UploadService) {}

  @Post()
  create(@Body() createUploadDto: CreateUploadDto) {
    return this.uploadService.create(createUploadDto);
  }

  @Get()
  findAll() {
    return this.uploadService.findAll();
  }

  @Post('profile-image')
  @UseGuards(new JwtAuthGuard(0))
  @UseInterceptors(FileInterceptor('file',multerOptions))
  uploadFile(@Req() req,@UploadedFile() file: Express.Multer.File) {
   try {
     return this.uploadService.imageUpload(req.user.user_id,file.filename);
   }catch (err){

   }
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.uploadService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUploadDto: UpdateUploadDto) {
    return this.uploadService.update(+id, updateUploadDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.uploadService.remove(+id);
  }
}
