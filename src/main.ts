import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import {ValidationPipe} from "@nestjs/common";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  app.enableCors();
  await app.listen(5000);
}
bootstrap();
