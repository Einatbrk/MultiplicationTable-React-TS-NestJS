import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './user/user.controller';
import { UserModule } from './user/user.module';
import { GameController } from './game/game.controller';
import { GameService } from './game/game.service';
import { GameModule } from './game/game.module';
import { WinnersController } from './winners/winners.controller';
import { WinnersService } from './winners/winners.service';
import { WinnersModule } from './winners/winners.module';
import { AdminController } from './admin/admin.controller';
import { AdminModule } from './admin/admin.module';
import { AdminService } from './admin/admin.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [UserModule, GameModule, WinnersModule, AdminModule,ConfigModule.forRoot({ isGlobal: true })],
  controllers: [AppController, UserController, GameController, WinnersController, AdminController],
  providers: [AppService, GameService,WinnersService, AdminService],
})
export class AppModule {}
