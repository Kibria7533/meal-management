import { PartialType } from '@nestjs/mapped-types';
import { CreateMonthlyStatementDto } from './create-monthly_statement.dto';

export class UpdateMonthlyStatementDto extends PartialType(CreateMonthlyStatementDto) {}
