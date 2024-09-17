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
  resetWinners(@Body('password') password: string): string {
    console.log('Post request to reset password with password: ',password)
    const isValid = this.adminService.validatePassword(password);

    if (!isValid) {
      console.log('Password recognized as invalid')
      return 'Unauthorized';
    }
    
    console.log('Password recognized as valid')
    this.winnersService.resetWinnersTable(); 
    return 'Winners table reset successfully';
  }
}
