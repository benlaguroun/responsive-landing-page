import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: ['https://benlaguroun-test.vercel.app/'],
    credentials: true,
  });

  const port = process.env.PORT || 3000;
  await app.listen(3000);
}
bootstrap();
