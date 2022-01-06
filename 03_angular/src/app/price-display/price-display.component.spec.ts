import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Observable } from 'rxjs';
import { of } from 'rxjs/internal/observable/of';
import { PriceService } from '../price.service';

import { PriceDisplayComponent } from './price-display.component';

describe('PriceDisplayComponent', () => {
  let component: PriceDisplayComponent;
  let fixture: ComponentFixture<PriceDisplayComponent>;

  // we load a m
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PriceDisplayComponent],
    }).compileComponents();
  });

  // gfergerg
  it('flags as loading at first', () => {
    let priceServiceMock = jasmine.createSpyObj('PriceService', ['getPrice']);
    priceServiceMock.getPrice.and.returnValue(new Observable<number>());
    TestBed.overrideProvider(PriceService, { useValue: priceServiceMock });

    fixture = TestBed.createComponent(PriceDisplayComponent);

    component = fixture.componentInstance;
    fixture.detectChanges();

    expect(component.loading).toBe(true);
  });

  it('sets price when loaded', () => {
    let priceServiceMock = jasmine.createSpyObj('PriceService', ['getPrice']);
    priceServiceMock.getPrice.and.returnValue(of({ BTC: { USD: 42587.69 } }));
    TestBed.overrideProvider(PriceService, { useValue: priceServiceMock });

    fixture = TestBed.createComponent(PriceDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    expect(component.prices).toEqual({ BTC: { USD: 42587.69 } });
  });
});
