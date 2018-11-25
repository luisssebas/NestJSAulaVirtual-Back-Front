import 'dotenv/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';
import { join } from 'path';

const port = process.env.PORT || 8080;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useStaticAssets(join(__dirname, '..', 'public'));
  app.setBaseViewsDir(__dirname + '/views');
  app.setViewEngine('hbs');
  await app.listen(port);
  Logger.log('Server running in http://localhost:${port}', 'Bootstrap');
}
bootstrap();
