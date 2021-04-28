import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

import { DashboardService } from './dashboard.service';
import { of } from 'rxjs';
import { HttpClient, HttpHandler } from '@angular/common/http';

describe('DashboardService', () => {
  let service: DashboardService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [DashboardService],
    });

    service = TestBed.inject(DashboardService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('#getAllProducts should return value from observable', (done: DoneFn) => {
    service.getAllProducts().subscribe((value) => {
      expect(value.length > 0).toBeTruthy();
      done();
    });

    const request = httpTestingController.expectOne(
      'https://mockend.com/limestoneguy/eCommerceAdmin/products'
    );
    expect(request.cancelled).toBeFalsy();
    expect(request.request.responseType).toEqual('json');
    request.flush([
      {
        id: 11,
        name: 'Samsung S1',
        description: 'Great Phone To use',
        discount: 50,
        image_url: 'https://via.placeholder.com/200',
        price: 45000,
        quantity: '3',
      },
      {
        id: 1,
        name: 'Samsung S2',
        description: 'Great Phone To use',
        discount: 50,
        image_url: 'https://via.placeholder.com/200',
        price: 50000,
        quantity: '3',
      },
    ]);
  });

  it('#addProduct should return value from observable', (done: DoneFn) => {
    service
      .addProduct({
        id: 1,
        name: 'Samsung S2',
        description: 'Great Phone To use',
        discount: 50,
        image_url: 'https://via.placeholder.com/200',
        price: 50000,
        quantity: '3',
      })
      .then((value) => {
        expect(value == 0).toBeTruthy();
        done();
      });
  });

  it('#getProductById should return value from promise', (done: DoneFn) => {
    service.getProductById(12).then((value) => {
      expect(value.id == 12).toBeTruthy();
      done();
    });

    const request = httpTestingController.expectOne(
      'https://mockend.com/limestoneguy/eCommerceAdmin/products?id_eq=12'
    );

    expect(request.cancelled).toBeFalsy();
    expect(request.request.responseType).toEqual('json');
    request.flush([
      {
        id: 12,
        name: 'Samsung S1',
        description: 'Great Phone To use',
        discount: 50,
        image_url: 'https://via.placeholder.com/200',
        price: 45000,
        quantity: '3',
      },
    ]);
  });

  it('#deleteProduct should return value from promise', (done: DoneFn) => {
    service
      .deleteProduct(1)
      .then((value) => {
        expect(value).toBeTruthy();
        done();
      });
  });
});
