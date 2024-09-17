import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config'; // Import ConfigService

@Injectable()
export class AdminService {
  private readonly resetPassword: string;

  constructor(private configService: ConfigService) {
    // Use ConfigService to load the password from environment variables
    this.resetPassword = this.configService.get<string>('RESET_PASSWORD');
  }

  validatePassword(plainPassword: string): boolean {
    console.log('Provided password: ', plainPassword);
    console.log('Expected password from env: ', this.resetPassword);
    return plainPassword === this.resetPassword;
  }
}
