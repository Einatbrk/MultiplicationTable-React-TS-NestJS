import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class WinnersService {
  private readonly filePath = path.join(__dirname, '../../results.json');

  // Get top 3 results
  getTopResults(): any {
    if (!fs.existsSync(this.filePath)) {
      throw new HttpException('No game results found', HttpStatus.NOT_FOUND);
    }

    const fileData = fs.readFileSync(this.filePath, 'utf-8');
    const results = JSON.parse(fileData);

    // Sort the results by score in descending order and return the top 3
    const topResults = results.sort((a: any, b: any) => b.score - a.score).slice(0, 3);
    return topResults;
  }

  // Reset winners table
  async resetWinnersTable(): Promise<void> {
    console.log('reset winners table called');
    if (!fs.existsSync(this.filePath)) {
      throw new HttpException('No game results file found', HttpStatus.NOT_FOUND);
    }
  
    return new Promise<void>((resolve, reject) => {
      fs.writeFile(this.filePath, '[]', (err) => {
        if (err) {
          console.error('Error resetting winners table:', err);  // Log error here
          reject(new HttpException('Failed to reset winners table', HttpStatus.INTERNAL_SERVER_ERROR));  // Reject with proper error
        } else {
          console.log('reset winners table finished');  // Log success
          resolve();  // Resolve the promise on success
        }
      });
    });
  }
}
