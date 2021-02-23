import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  console.log('4000 Product + user');
  await app.listen(4000);
}
bootstrap();
