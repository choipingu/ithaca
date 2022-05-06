import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const PORT = 8080
  const app = await NestFactory.create(AppModule);
  await app.listen(PORT);
  Logger.log(`server Start port : ${PORT}`)
}
bootstrap();
