import { HttpModule, HttpService } from '@nestjs/axios';
import { ConfigModule } from '@nestjs/config';
import { Test, TestingModule } from '@nestjs/testing';
import { of } from 'rxjs';
import { PriceService } from './price.service';

describe('PriceService', () => {
  let service: PriceService;
  let httpService: HttpService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [HttpModule, ConfigModule.forRoot({ envFilePath: '.env.test' })],
      providers: [PriceService],
    }).compile();

    httpService = module.get<HttpService>(HttpService);
    service = module.get<PriceService>(PriceService);
  });

  it('returns price for pairing', async () => {
    const fakeResponse = {
      status: 200,
      statusText: 'OK',
      headers: {},
      config: {},
      data: {
        BTC: {
          USD: 20,
          GBP: 15,
        },
        ETH: {
          USD: 10,
          GBP: 8,
        },
        XRP: {
          USD: 5,
          GBP: 4,
        },
      },
    };

    jest.spyOn(httpService, 'get').mockImplementation(() => of(fakeResponse));
    const response = await service.getPrice('BTC,ETH,XRP', 'USD,GBP');
    expect(response).toEqual({
      prices: {
        BTC: { USD: 20, GBP: 15 },
        ETH: { USD: 10, GBP: 8 },
        XRP: { USD: 5, GBP: 4 },
      },
    });
    expect(httpService.get).toHaveBeenCalledWith(
      'https://min-api.cryptocompare.com/data/pricemulti',
      {
        params: {
          apiKey: '1234',
          fsyms: 'BTC,ETH,XRP',
          tsyms: 'USD,GBP',
        },
      },
    );
  });
});

// https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,XRP&tsyms=USD,GBP
// {"BTC":{"USD":46197.84,"GBP":34121.87},"ETH":{"USD":3788.53,"GBP":2798.5},"XRP":{"USD":0.8258,"GBP":0.6108}}
