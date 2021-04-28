import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardComponent } from './dashboard.component';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;
  let httpTestingController: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DashboardComponent],
      imports: [HttpClientTestingModule],
    }).compileComponents();

    httpTestingController = TestBed.inject(HttpTestingController);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('After Get AllProducts function productList should be populated', (done: DoneFn) => {
  //   component.getProducts().then((value) => {
  //     expect(component.productList.length > 0).toBeTruthy();
  //     done();
  //   });

  //   const request = httpTestingController.expectOne(
  //     'https://mockend.com/limestoneguy/eCommerceAdmin/products'
  //   );
  //   expect(request.cancelled).toBeFalsy();
  //   expect(request.request.responseType).toEqual('json');
  //   request.flush([
  //     {
  //       id: 11,
  //       name: 'Samsung S1',
  //       description: 'Great Phone To use',
  //       discount: 50,
  //       image_url: 'https://via.placeholder.com/200',
  //       price: 45000,
  //       quantity: '3',
  //     },
  //   ])
  // });
});
