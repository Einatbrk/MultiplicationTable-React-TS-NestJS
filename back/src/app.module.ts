import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './user/user.controller';
import { UserModule } from './user/user.module';
import { GameController } from './game/game.controller';
import { GameService } from './game/game.service';
import { GameModule } from './game/game.module';
import { WinnersController } from './winners/winners.controller';
import { WinnersModule } from './winners/winners.module';

@Module({
  imports: [UserModule, GameModule, WinnersModule],
  controllers: [AppController, UserController, GameController, WinnersController],
  providers: [AppService, GameService],
})
export class AppModule {}
