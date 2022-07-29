import { Module } from "@nestjs/common";
import { MonthlyStatementService } from "./monthly_statement.service";
import { MonthlyStatementController } from "./monthly_statement.controller";
import { MonthlyStatement, MonthlyStatementSchema } from "./monthly-statementSchema";
import { MongooseModule } from "@nestjs/mongoose";
import { DepositService } from "../deposit/deposit.service";
import { DepositController } from "../deposit/deposit.controller";
import { DepositModule } from "../deposit/deposit.module";
import { BazarListModule } from "../bazar-list/bazar-list.module";
import { MealEntryModule } from "../meal_entry/meal_entry.module";

@Module({
  imports: [MongooseModule.forFeature([{ name: "MonthlyStatement", schema: MonthlyStatementSchema }]),
    DepositModule,
    BazarListModule,
    MealEntryModule
  ],
  controllers: [MonthlyStatementController
  ],
  providers: [MonthlyStatementService
  ]
})
export class MonthlyStatementModule {
}
