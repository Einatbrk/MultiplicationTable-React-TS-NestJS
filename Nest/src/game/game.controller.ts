import { Controller, Post,Get, Body, Delete, HttpException, HttpStatus } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';
@Controller('game')
export class GameController {
    private readonly filePath = path.join(__dirname, '../../results.json');
    
    @Post('save')
  async saveGameResult(
    @Body() saveGameDto: { gameId: string; playerName: string; score: number }
  ): Promise<any> {
    const { gameId, playerName, score } = saveGameDto;

    try {
      let results = [];
      if (fs.existsSync(this.filePath)) {
        const fileData = fs.readFileSync(this.filePath, 'utf-8');
        results = JSON.parse(fileData);
      }

      // Check if the game with the same gameId exists
      const existingGameIndex = results.findIndex((game: any) => game.gameId === gameId);

      if (existingGameIndex !== -1) {
        // Update the score for the existing game
        results[existingGameIndex].score = score;
        console.log(`Updating game result for gameId ${gameId} with new score: ${score}`);
      } else {
        // Add new game result if no existing gameId is found
        results.push({ gameId, playerName, score });
        console.log(`Saving new game result for gameId ${gameId} with score: ${score}`);
      }

      // Save the results back to the file
      fs.writeFileSync(this.filePath, JSON.stringify(results, null, 2));
      return { message: 'Game saved or updated successfully' };
    } catch (error) {
      console.error('Error saving game results:', error);
      throw new HttpException('Failed to save game', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
    
    @Delete('reset-winners-table')
    async resetWinnersTable():Promise<any>{
        
        try{
            if (!fs.existsSync(this.filePath)){
                throw new HttpException('No games results file found',HttpStatus.NOT_FOUND);
            }
            fs.writeFileSync(this.filePath,'[]');
            return {message: 'Winners table reset successfully'};
        } catch (error){
            console.error('Error resetting winners table:', error);
            throw new HttpException(
                'Failed to reset winners table',
                HttpStatus.INTERNAL_SERVER_ERROR
            );
        }
    }
    @Delete('reset-game')
    async resetGame(@Body() resetGameDto: { gameId: string }): Promise<any> {
        const { gameId } = resetGameDto;

        try {
            if (!fs.existsSync(this.filePath)) {
                throw new HttpException(
                    'No game results found to reset', 
                    HttpStatus.NOT_FOUND
                );
            }

            const fileData = fs.readFileSync(this.filePath, 'utf-8');
            let results = JSON.parse(fileData);

            // Filter out the game with the specified gameId
            const updatedResults = results.filter((game: any) => game.gameId !== gameId);

            if (results.length === updatedResults.length) {
                throw new HttpException(
                    `Game with ID ${gameId} not found`, 
                    HttpStatus.NOT_FOUND
                );
            }

            // Write the updated results back to the file
            fs.writeFileSync(this.filePath, JSON.stringify(updatedResults, null, 2));
            return { message: 'Game reset successfully' };
        } catch (error) {
            console.error('Error resetting game: ', error);
            throw new HttpException(
                'Failed to reset game', 
                HttpStatus.INTERNAL_SERVER_ERROR
            );
        }
    }
}
