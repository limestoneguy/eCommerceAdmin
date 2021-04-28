import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { NavBarComponent } from './nav-bar.component';

describe('NavBarComponent', () => {
  let component: NavBarComponent;
  let fixture: ComponentFixture<NavBarComponent>;
  let de: DebugElement;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [NavBarComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavBarComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement;
    fixture.detectChanges();
  });

  it('Should Create', ()=>{
    expect(component).toBeTruthy();
  })

  it('Should have Company Name',()=>{
    expect(de.query(By.css('.logo')).nativeElement.innerText).toBe('ShopBridge Admin');
  })
});
