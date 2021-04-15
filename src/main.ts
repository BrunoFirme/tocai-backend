import { NestFactory } from '@nestjs/core';
import { AppModule } from './appModule';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(5000);
}
bootstrap();
