import { PartialType } from '@nestjs/mapped-types';
import { CreateMessDto } from './create-mess.dto';

export class UpdateMessDto extends PartialType(CreateMessDto) {}
