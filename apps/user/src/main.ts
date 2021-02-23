import { NestFactory } from '@nestjs/core';
import { UserModule } from './user.module';

async function bootstrap() {
  const app = await NestFactory.create(UserModule);
  console.log('3001 Product')
  await app.listen(3001);
}
bootstrap();
