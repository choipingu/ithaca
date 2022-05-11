import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cookieParser from 'cookie-parser'

async function bootstrap() {
  const PORT = 8080
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: true,
    credentials: true,
  })
  app.use(cookieParser())
  await app.listen(PORT);
  Logger.log(`server Start port : ${PORT}`)
}
bootstrap();
