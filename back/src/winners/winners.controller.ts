import { Controller, Get, Delete, HttpCode, HttpStatus } from '@nestjs/common';
import { WinnersService } from './winners.service';

@Controller('winners')
export class WinnersController {
  constructor(private readonly winnersService: WinnersService) {}

  @Get('top-results')
  async getTopResults(): Promise<any> {
    try {
      const topResults = this.winnersService.getTopResults();
      return { topResults };
    } catch (error) {
      console.error('Error retrieving top results:', error);
      throw error; // Re-throwing the error so it gets handled by NestJS
    }
  }
}
