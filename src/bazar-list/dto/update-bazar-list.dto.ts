import { PartialType } from '@nestjs/mapped-types';
import { CreateBazarListDto } from './create-bazar-list.dto';

export class UpdateBazarListDto extends PartialType(CreateBazarListDto) {}
