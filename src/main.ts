import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { configService } from './config/config.service';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  if (!configService.isProduction()) {

    const options = new DocumentBuilder()
      .setTitle('tariy')
      .setDescription('The Tariy API description')
      .setVersion('1.0')
      .addTag('back')
      .build();
    const document = SwaggerModule.createDocument(app, options);

    SwaggerModule.setup('api', app, document);
  }

  app.enableCors();
  await app.listen(process.env.PORT || 3000);
  console.log(`Our Tariy-backend is running on port ${process.env.PORT}`);
}
bootstrap();
