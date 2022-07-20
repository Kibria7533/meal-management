import { Injectable } from '@nestjs/common';
import { CreateBazarListDto } from './dto/create-bazar-list.dto';
import { UpdateBazarListDto } from './dto/update-bazar-list.dto';

@Injectable()
export class BazarListService {
  create(createBazarListDto: CreateBazarListDto) {
    return 'This action adds a new bazarList';
  }

  findAll() {
    return `This action returns all bazarList`;
  }

  findOne(id: number) {
    return `This action returns a #${id} bazarList`;
  }

  update(id: number, updateBazarListDto: UpdateBazarListDto) {
    return `This action updates a #${id} bazarList`;
  }

  remove(id: number) {
    return `This action removes a #${id} bazarList`;
  }
}
