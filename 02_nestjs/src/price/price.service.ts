import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { lastValueFrom, map } from 'rxjs';

@Injectable()
export class PriceService {
  static API_ROOT = 'https://min-api.cryptocompare.com/data/pricemulti';

  constructor(
    private configService: ConfigService,
    private http: HttpService,
  ) {}

  async getPrice(
    from: string,
    to: string,
  ): Promise<{ prices: { [key: string]: number } }> {
    // let JSO

    console.log('again, from', from);
    console.log('again, to', to);

    const prices = await this.request<{ [key: string]: number }>( // this is what the request should be returning
      // Param 1
      PriceService.API_ROOT,
      // Param 2
      {
        params: {
          apiKey: this.configService.get<string>('CRYPTOCOMPARE_API_KEY'),
          fsyms: from,
          tsyms: to,
        },
      },
    );

    console.log('prices', prices);

    // console.log(json); // {
    //   USD: 44.44;
    // }

    //  console.log(json[to]); // 44.44

    return { prices };
  }

  private async request<T>(
    url: string,
    params: { [key: string]: any },
  ): Promise<T> {
    console.log('running request');
    const request = this.http
      .get(url, params)
      .pipe(map((response) => response.data));

    // console.log(request); // Observable {
    //     source: Observable { _subscribe: [Function (anonymous)] },
    //     operator: [Function (anonymous)]
    //   }

    // console.log(lastValueFrom(request));

    return lastValueFrom(request);
  }
}
