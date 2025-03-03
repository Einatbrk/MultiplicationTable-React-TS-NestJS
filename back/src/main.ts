/* eslint-disable prettier/prettier */
import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import * as compression from "compression";
import helmet from "helmet";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors(); 
  app.use(compression()); 
  app.use(helmet()); 

  await app.listen(3001);
  console.log("🚀 Server is running on http://localhost:3001");
}
bootstrap();
