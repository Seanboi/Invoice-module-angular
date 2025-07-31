import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Documentmenu } from './documentmenu';

describe('Documentmenu', () => {
  let component: Documentmenu;
  let fixture: ComponentFixture<Documentmenu>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Documentmenu]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Documentmenu);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
