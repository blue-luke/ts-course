import { Controller, Get, Query } from '@nestjs/common';
import { PriceService } from './price.service';

@Controller('price')
export class PriceController {
  constructor(private readonly priceService: PriceService) {}

  @Get()
  async get(
    @Query('from') from: string,
    @Query('to') to: string,
  ): Promise<{ prices: { [key: string]: number } }> {
    //TODO: why are we returning a promise here ? isn't this what we expose to the outside
    const prices = await this.priceService.getPrice(from, to);
    console.log('eeeee:', prices);
    return prices;
  }
}

// if you use {price} the return value will be {price: 44.44}
