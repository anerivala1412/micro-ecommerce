import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Transport } from '@nestjs/microservices';
import { Logger } from '@nestjs/common';
const logger = new Logger('Product');

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  console.log('4000 Product + user');
  await app.listen(4000);
}
bootstrap();
