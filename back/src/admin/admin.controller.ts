import { Controller, Body, Post,HttpException,HttpStatus } from '@nestjs/common';
import { AdminService } from './admin.service';
import { WinnersService } from '../winners/winners.service';
import { STATUS_CODES } from 'http';

@Controller('admin')
export class AdminController {
  constructor(
    private readonly adminService: AdminService,
    private readonly winnersService: WinnersService,
  ) {}

  @Post('reset-winners')
  async resetWinners(@Body('password') password: string): Promise<string> {
    console.log('Post request to reset password with password: ', password);
    const isValid = this.adminService.validatePassword(password);

    if (!isValid) {
      console.log('Password recognized as invalid');
      throw new HttpException('Unauthorized', HttpStatus.UNAUTHORIZED);  // Return a proper HTTP status code
    }

    console.log('Password recognized as valid');
    try {
      await this.winnersService.resetWinnersTable();  // Ensure we await this
      console.log('before returning winners table successful reset')
      return 'Winners table reset successfully';  
    } catch (error) {
      console.error('Error resetting winners table:', error);
      throw new HttpException('Failed to reset winners table', HttpStatus.INTERNAL_SERVER_ERROR);  // Return proper error status
    }
  }
}