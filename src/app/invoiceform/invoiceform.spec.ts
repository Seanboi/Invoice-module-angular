import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Invoiceform } from './invoiceform';

describe('Invoiceform', () => {
  let component: Invoiceform;
  let fixture: ComponentFixture<Invoiceform>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Invoiceform]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Invoiceform);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
