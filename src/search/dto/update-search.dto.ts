import { PartialType } from '@nestjs/swagger';
import { SearchElasticDto } from './create-search.dto';

export class UpdateSearchDto extends PartialType(SearchElasticDto) {}
