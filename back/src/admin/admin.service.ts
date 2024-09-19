import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config'; 

@Injectable()
export class AdminService {
  private readonly resetPassword: string;

  constructor(private configService: ConfigService) {
    this.resetPassword = this.configService.get<string>('RESET_PASSWORD');
  }

  validatePassword(plainPassword: string): boolean {
    console.log('Provided password: ', plainPassword);
    console.log('Expected password from env: ', this.resetPassword);
    return plainPassword === this.resetPassword;
  }
}
