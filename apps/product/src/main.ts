import { NestFactory } from '@nestjs/core';
import { ProductModule } from './product.module';

async function bootstrap() {
  const app = await NestFactory.create(ProductModule);
  console.log('3002 Product');
  await app.listen(3002);
}
bootstrap();
