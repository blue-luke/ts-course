import { Controller, Get, Query } from '@nestjs/common';
import { PriceService } from './price.service';

@Controller('prices')
export class PriceController {
  constructor(private readonly priceService: PriceService) {}

  @Get()
  async get(
    @Query('from') from: string,
    @Query('to') to: string,
  ): Promise<{ prices: { [key: string]: number } }> {
    let prices = await this.priceService.getPrice(from, to);
    console.log({ prices });
    return prices;
  }
}

// if you use {price} the return value will be {price: 44.44}
