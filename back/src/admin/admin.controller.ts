import { Controller, Body, Post } from '@nestjs/common';
import { AdminService } from './admin.service';
import { WinnersService } from '../winners/winners.service';

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
      throw new Error('Unauthorized');
    }

    console.log('Password recognized as valid');
    try {
      await this.winnersService.resetWinnersTable(); // Await here
      return 'Winners table reset successfully';
    } catch (error) {
      throw new Error('Failed to reset winners table');
    }
  }
}
