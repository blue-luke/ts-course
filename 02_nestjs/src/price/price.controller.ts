import { Controller, Get, Query } from '@nestjs/common';
import { PriceService } from './price.service';

@Controller('price')
export class PriceController {
  constructor(private readonly priceService: PriceService) {}

  @Get()
  // What does @ do?
  async get(@Query('from') from: string, @Query('to') to: string): Promise<{ price: number }> {
    // Currency pairing is specified as from and to
    let price = await this.priceService.getPrice(from, to);
    return { price };
  }
}
