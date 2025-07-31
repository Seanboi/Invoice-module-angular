import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Viewdocuments } from './viewdocuments';

describe('Viewdocuments', () => {
  let component: Viewdocuments;
  let fixture: ComponentFixture<Viewdocuments>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Viewdocuments]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Viewdocuments);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
