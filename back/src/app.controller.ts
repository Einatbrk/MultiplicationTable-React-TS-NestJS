/* eslint-disable prettier/prettier */
import { Controller, Get, Query } from '@nestjs/common';

@Controller('multiplication')
export class AppController {
  @Get()
  getMultiplicationTable(@Query('number') num: number) {
    if (!num) return { error: 'Number is required' };

    const results = Array.from({ length: 10 }, (_, i) => ({
      factor: i + 1,
      result: num * (i + 1),
    }));

    return { number: num, results };
  }
}
