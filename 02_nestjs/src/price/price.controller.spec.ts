import { Test, TestingModule } from '@nestjs/testing';
import { PriceController } from './price.controller';
import { PriceService } from './price.service';

describe('PriceController', () => {
  let controller: PriceController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PriceController],
      providers: [PriceService],
    })
      .overrideProvider(PriceService)
      .useValue({
        getPrice: async () => {
          return { prices: { BTC: { GBP: 34403.6 }, ETH: { GBP: 2818.38 } } };
        },
      })
      .compile();

    controller = module.get<PriceController>(PriceController);
  });

  it('returns price for pairing', async () => {
    const response = await controller.get('BTC', 'USD');
    expect(response).toEqual({
      prices: { BTC: { GBP: 34403.6 }, ETH: { GBP: 2818.38 } },
    });
  });
});
