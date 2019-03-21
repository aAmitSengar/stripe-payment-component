import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IdealBankComponent } from './ideal-bank.component';

describe('IdealBankComponent', () => {
  let component: IdealBankComponent;
  let fixture: ComponentFixture<IdealBankComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IdealBankComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IdealBankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
