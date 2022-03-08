import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());

  // swagger setup
  const config = new DocumentBuilder()
  .setTitle('Calendar API')
  .setDescription('This API helps you manage calendar data!')
  .setVersion('1.0')
  .addTag('calendar')
  .addBearerAuth(
    { in:'header', type: 'http', scheme: 'bearer', bearerFormat: 'JWT' },
    'access-token',
  )  
  .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);

  app.enableCors();
  await app.listen(3000);
}
bootstrap();
