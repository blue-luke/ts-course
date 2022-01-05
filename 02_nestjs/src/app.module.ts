import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { PriceController } from './price/price.controller';
import { PriceService } from './price/price.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [HttpModule, ConfigModule.forRoot()],
  controllers: [PriceController],
  providers: [PriceService],
})
export class AppModule {}
