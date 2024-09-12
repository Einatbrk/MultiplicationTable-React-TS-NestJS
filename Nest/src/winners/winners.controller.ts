// src/winners/winners.controller.ts
import { Controller, Get, Delete, HttpException, HttpStatus } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';

@Controller('winners') // Ensure this is correct
export class WinnersController {
  private readonly filePath = path.join(__dirname, '../../results.json');

  @Get('top-results') // Ensure this is correct
  async getTopResults(): Promise<any> {
    try {
      if (!fs.existsSync(this.filePath)) {
        throw new HttpException('No game results found', HttpStatus.NOT_FOUND);
      }

      const fileData = fs.readFileSync(this.filePath, 'utf-8');
      const results = JSON.parse(fileData);

      // Sort the results by score in descending order and return the top 3
      const topResults = results.sort((a: any, b: any) => b.score - a.score).slice(0, 3);

      return { topResults };
    } catch (error) {
      console.error('Error retrieving top results:', error);
      throw new HttpException('Failed to retrieve top results', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Delete('reset-winners-table')
  async resetWinnersTable(): Promise<any> {
    try {
      if (!fs.existsSync(this.filePath)) {
        throw new HttpException('No games results file found', HttpStatus.NOT_FOUND);
      }

      fs.writeFileSync(this.filePath, '[]');
      return { message: 'Winners table reset successfully' };
    } catch (error) {
      console.error('Error resetting winners table:', error);
      throw new HttpException('Failed to reset winners table', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
