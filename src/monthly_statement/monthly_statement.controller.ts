import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MonthlyStatementService } from './monthly_statement.service';
import { CreateMonthlyStatementDto } from './dto/create-monthly_statement.dto';
import { UpdateMonthlyStatementDto } from './dto/update-monthly_statement.dto';

@Controller('monthly-statement')
export class MonthlyStatementController {
  constructor(private readonly monthlyStatementService: MonthlyStatementService) {}

  @Post()
  create(@Body() createMonthlyStatementDto: CreateMonthlyStatementDto) {
    return this.monthlyStatementService.create(createMonthlyStatementDto);
  }

  @Get()
  findAll() {
    return this.monthlyStatementService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.monthlyStatementService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMonthlyStatementDto: UpdateMonthlyStatementDto) {
    return this.monthlyStatementService.update(+id, updateMonthlyStatementDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.monthlyStatementService.remove(+id);
  }
}
