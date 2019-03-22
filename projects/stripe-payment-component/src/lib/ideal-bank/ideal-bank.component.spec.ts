import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StripeBankComponent } from './stripe-bank.component';

describe('StripeBankComponent', () => {
  let component: StripeBankComponent;
  let fixture: ComponentFixture<StripeBankComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StripeBankComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StripeBankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
