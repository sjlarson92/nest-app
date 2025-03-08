import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // enableCors() makes the endpoint public, would needs to add configuration to only allow specific origins
  app.enableCors();

  // Sets a prefix for every route
  app.setGlobalPrefix('api');
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
