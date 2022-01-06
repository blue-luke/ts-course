import { Component, Input, OnInit } from '@angular/core';
import { PriceService } from '../price.service';

@Component({
  selector: 'price-display',
  templateUrl: './price-display.component.html',
  styleUrls: ['./price-display.component.css'],
})
export class PriceDisplayComponent implements OnInit {
  @Input() from!: string;
  @Input() to!: string;
  prices!: { [key: string]: { [key: string]: number } };

  constructor(private priceService: PriceService) {}

  ngOnInit(): void {
    this.loadPriceData();
  }

  loadPriceData() {
    this.priceService.getPrice(this.from, this.to).subscribe((price) => {
      console.log(price);
      this.prices = price;
    });
  }

  get loading(): boolean {
    return this.prices === undefined;
  }
}
