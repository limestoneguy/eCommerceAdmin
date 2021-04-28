import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { DashboardService } from 'src/app/services/dashboard.service';

import { ProductInfoComponent } from './product-info.component';

describe('ProductInfoComponent', () => {
  let component: ProductInfoComponent;
  let fixture: ComponentFixture<ProductInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductInfoComponent],
      imports: [RouterTestingModule, HttpClientTestingModule],
      providers: [DashboardService],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('isValid should return false', () => {
    expect(component.isValidProduct()).toBeFalsy();
  });

  it('isValid should return true for valid data', () => {
    component.product_info = {
      description: 'description',
      discount: 32,
      id: 12,
      image_url: '',
      name: 'Product Name',
      price: 12000,
      quantity: '3'
    };
    expect(component.isValidProduct()).toBeTruthy();
  });

  it('addProduct function should return undefined', async ()=>{
    // expect(component.addProduct()).toEqual(Promise.resolve(undefined));
    const response = await component.addProduct();
    expect(response).toBe(undefined);

  })
});
