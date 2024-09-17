import { Module } from '@nestjs/common';
import { AdminService } from './admin.service';
import { AdminController } from './admin.controller';
import { WinnersService } from 'src/winners/winners.service';

@Module({
  controllers: [AdminController],
  providers: [AdminService, WinnersService]
})
export class AdminModule {}
