/* eslint-disable prettier/prettier */
import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import * as compression from "compression";
import helmet from "helmet";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors(); // ✅ מאפשר חיבור רספונסיבי בין ה-Frontend ל-Backend
  app.use(compression()); // ✅ דוחס נתונים כדי לשפר ביצועים
  app.use(helmet()); // ✅ מוסיף אבטחה בסיסית

  await app.listen(3001);
  console.log("🚀 Server is running on http://localhost:3001");
}
bootstrap();
